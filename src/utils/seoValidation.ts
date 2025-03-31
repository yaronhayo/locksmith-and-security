
/**
 * Validates structured schema data
 */
export const validateSchema = (schema: any) => {
  const errors: string[] = [];
  
  // Check for required properties
  if (!schema["@context"]) {
    errors.push("Missing @context property (should be https://schema.org)");
  }
  
  if (!schema["@type"]) {
    errors.push("Missing @type property");
  }
  
  // Type-specific validation
  switch (schema["@type"]) {
    case "LocalBusiness":
      if (!schema.name) errors.push("LocalBusiness is missing name");
      if (!schema.address) errors.push("LocalBusiness is missing address");
      if (schema.address && !schema.address.addressLocality) errors.push("LocalBusiness address is missing addressLocality");
      break;
      
    case "Service":
      if (!schema.name) errors.push("Service is missing name");
      if (!schema.provider) errors.push("Service is missing provider");
      break;
      
    case "BlogPosting":
      if (!schema.headline) errors.push("BlogPosting is missing headline");
      if (!schema.datePublished) errors.push("BlogPosting is missing datePublished");
      break;
      
    case "FAQPage":
      if (!schema.mainEntity || !Array.isArray(schema.mainEntity)) {
        errors.push("FAQPage is missing mainEntity array");
      } else if (schema.mainEntity.length === 0) {
        errors.push("FAQPage mainEntity array is empty");
      } else {
        // Check first question for proper structure
        const firstQuestion = schema.mainEntity[0];
        if (!firstQuestion.name) errors.push("FAQPage question is missing name");
        if (!firstQuestion.acceptedAnswer) errors.push("FAQPage question is missing acceptedAnswer");
        if (firstQuestion.acceptedAnswer && !firstQuestion.acceptedAnswer.text) {
          errors.push("FAQPage answer is missing text");
        }
      }
      break;
      
    case "BreadcrumbList":
      if (!schema.itemListElement || !Array.isArray(schema.itemListElement)) {
        errors.push("BreadcrumbList is missing itemListElement array");
      } else if (schema.itemListElement.some((item: any) => !item.name || !item.item)) {
        errors.push("BreadcrumbList has items with missing name or item properties");
      }
      break;
  }
  
  return {
    valid: errors.length === 0,
    errors
  };
};

/**
 * Validates meta description tags
 */
export const validateMetaDescription = (description: string) => {
  const errors: string[] = [];
  const suggestions: string[] = [];
  
  if (!description) {
    errors.push("Meta description is missing");
    return {
      valid: false,
      errors,
      suggestions: ["Add a meta description between 120-158 characters"]
    };
  }
  
  // Length checks
  if (description.length < 70) {
    suggestions.push("Meta description is too short (under 70 characters)");
  }
  
  if (description.length > 158) {
    suggestions.push("Meta description is too long (over 158 characters) and may be truncated");
  }
  
  // Content checks
  if (!/[.!?]$/.test(description)) {
    suggestions.push("Meta description should end with proper punctuation");
  }
  
  if (!/[a-z]/i.test(description)) {
    errors.push("Meta description doesn't contain any letters");
  }
  
  // Calculate optimal length
  const optimal = description.length >= 120 && description.length <= 158;
  
  return {
    valid: errors.length === 0 && optimal,
    errors,
    suggestions
  };
};

/**
 * Validates title tags
 */
export const validateTitleTag = (title: string) => {
  const errors: string[] = [];
  const suggestions: string[] = [];
  
  if (!title) {
    errors.push("Title tag is missing");
    return {
      valid: false,
      errors,
      suggestions: ["Add a title tag between 50-60 characters"]
    };
  }
  
  // Length checks
  if (title.length < 30) {
    suggestions.push("Title is too short (under 30 characters)");
  }
  
  if (title.length > 60) {
    suggestions.push("Title is too long (over 60 characters) and may be truncated in search results");
  }
  
  // Content checks
  if (!/[a-z]/i.test(title)) {
    errors.push("Title doesn't contain any letters");
  }
  
  // Calculate optimal length
  const optimal = title.length >= 50 && title.length <= 60;
  
  return {
    valid: errors.length === 0 && optimal,
    errors,
    suggestions
  };
};
