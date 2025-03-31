
/**
 * Utility functions for validating and testing SEO elements
 */

/**
 * Validates a structured data schema against common requirements
 * @param schema The schema object to validate
 * @returns Validation result with any errors
 */
export const validateSchema = (schema: object): { valid: boolean, errors: string[] } => {
  const errors: string[] = [];
  
  // Check if schema has required context
  if (!schema.hasOwnProperty('@context')) {
    errors.push('Missing @context property (should be "https://schema.org")');
  }
  
  // Check if schema has a type
  if (!schema.hasOwnProperty('@type')) {
    errors.push('Missing @type property');
  }
  
  // Check for required fields based on common schema types
  const schemaType = schema['@type'];
  
  if (schemaType === 'LocalBusiness' || schemaType === 'Organization') {
    if (!schema['name']) errors.push('Missing name property for LocalBusiness/Organization');
    if (!schema['address']) errors.push('Missing address property for LocalBusiness/Organization');
  }
  
  if (schemaType === 'Product') {
    if (!schema['name']) errors.push('Missing name property for Product');
    if (!schema['offers']) errors.push('Missing offers property for Product');
  }
  
  if (schemaType === 'Article' || schemaType === 'BlogPosting') {
    if (!schema['headline']) errors.push('Missing headline property for Article/BlogPosting');
    if (!schema['datePublished']) errors.push('Missing datePublished property for Article/BlogPosting');
  }

  return {
    valid: errors.length === 0,
    errors
  };
};

/**
 * Logs structured data to the console in a format that can be tested in Google's
 * Structured Data Testing Tool
 * @param schema The schema object to log
 */
export const logSchemaForTesting = (schema: object): void => {
  console.log('SEO Schema for testing:');
  console.log(JSON.stringify(schema, null, 2));
  console.log('Validation URL: https://validator.schema.org/');
};

/**
 * Checks if a meta description is optimized for search engines
 * @param description The meta description text
 * @returns Validation result with suggestions
 */
export const validateMetaDescription = (description: string): { valid: boolean, suggestions: string[] } => {
  const suggestions: string[] = [];
  
  if (!description) {
    suggestions.push('Meta description is missing');
    return { valid: false, suggestions };
  }
  
  if (description.length < 50) {
    suggestions.push('Meta description is too short (should be 50-160 characters)');
  }
  
  if (description.length > 160) {
    suggestions.push('Meta description is too long (should be 50-160 characters)');
  }
  
  if (!/[.!?]$/.test(description)) {
    suggestions.push('Meta description should end with a punctuation mark');
  }
  
  return {
    valid: suggestions.length === 0,
    suggestions
  };
};

/**
 * Validates the structure and content of a title tag
 * @param title The title tag text
 * @returns Validation result with suggestions
 */
export const validateTitleTag = (title: string): { valid: boolean, suggestions: string[] } => {
  const suggestions: string[] = [];
  
  if (!title) {
    suggestions.push('Title tag is missing');
    return { valid: false, suggestions };
  }
  
  if (title.length < 10) {
    suggestions.push('Title tag is too short (should be 10-60 characters)');
  }
  
  if (title.length > 60) {
    suggestions.push('Title tag is too long (should be 10-60 characters)');
  }
  
  return {
    valid: suggestions.length === 0,
    suggestions
  };
};
