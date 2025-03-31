
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { validateSchema, validateMetaDescription, validateTitleTag } from '@/utils/seoValidation';
import { Separator } from '@/components/ui/separator';

interface SEOValidationProps {
  url?: string;
}

const SEODashboard: React.FC<SEOValidationProps> = ({ url = window.location.href }) => {
  const [activeTab, setActiveTab] = useState('schemas');
  const [validationResults, setValidationResults] = useState<any>(null);
  const [isValidating, setIsValidating] = useState(false);

  const runSchemaValidation = () => {
    setIsValidating(true);
    
    try {
      // Find all schema script tags in the document
      const schemas = Array.from(document.querySelectorAll('script[type="application/ld+json"]'))
        .map(script => {
          try {
            return JSON.parse(script.textContent || '{}');
          } catch (e) {
            return { error: 'Invalid JSON' };
          }
        });
      
      // Validate each schema
      const results = schemas.map(schema => ({
        schema,
        validation: validateSchema(schema)
      }));
      
      setValidationResults({
        schemas: results,
        valid: results.every(r => r.validation.valid),
        count: results.length
      });
    } catch (error) {
      setValidationResults({
        error: 'Error validating schemas',
        message: error.message
      });
    }
    
    setIsValidating(false);
  };

  const runMetaValidation = () => {
    setIsValidating(true);
    
    try {
      // Get meta title
      const titleElement = document.querySelector('title');
      const titleText = titleElement ? titleElement.textContent : '';
      const titleValidation = validateTitleTag(titleText || '');
      
      // Get meta description
      const metaDescription = document.querySelector('meta[name="description"]');
      const descriptionText = metaDescription ? metaDescription.getAttribute('content') : '';
      const descriptionValidation = validateMetaDescription(descriptionText || '');
      
      // Get canonical URL
      const canonical = document.querySelector('link[rel="canonical"]');
      const canonicalUrl = canonical ? canonical.getAttribute('href') : '';
      
      // Check for Open Graph tags
      const ogTags = Array.from(document.querySelectorAll('meta[property^="og:"]'))
        .map(tag => ({
          property: tag.getAttribute('property'),
          content: tag.getAttribute('content')
        }));
        
      // Check for Twitter Card tags
      const twitterTags = Array.from(document.querySelectorAll('meta[name^="twitter:"]'))
        .map(tag => ({
          name: tag.getAttribute('name'),
          content: tag.getAttribute('content')
        }));
      
      setValidationResults({
        title: {
          text: titleText,
          validation: titleValidation
        },
        description: {
          text: descriptionText,
          validation: descriptionValidation
        },
        canonical: canonicalUrl,
        openGraph: {
          tags: ogTags,
          valid: ogTags.length >= 4
        },
        twitter: {
          tags: twitterTags,
          valid: twitterTags.length >= 3
        }
      });
    } catch (error) {
      setValidationResults({
        error: 'Error validating meta tags',
        message: error.message
      });
    }
    
    setIsValidating(false);
  };

  const handleValidate = () => {
    if (activeTab === 'schemas') {
      runSchemaValidation();
    } else if (activeTab === 'meta') {
      runMetaValidation();
    }
  };

  return (
    <div className="container mx-auto p-4">
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl">SEO Validation Tools</CardTitle>
          <CardDescription>
            Validate structured data and meta tags for {url}
          </CardDescription>
        </CardHeader>
        
        <Tabs defaultValue="schemas" value={activeTab} onValueChange={setActiveTab}>
          <div className="px-6">
            <TabsList className="grid grid-cols-2">
              <TabsTrigger value="schemas">Schema Validation</TabsTrigger>
              <TabsTrigger value="meta">Meta Tags</TabsTrigger>
            </TabsList>
          </div>
          
          <CardContent className="pt-6">
            <TabsContent value="schemas" className="mt-0">
              <div className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  Validate structured data markup (JSON-LD) on the current page against Schema.org standards.
                </p>
                
                {validationResults && validationResults.schemas && (
                  <div className="mt-4 space-y-4">
                    <div className="flex items-center">
                      <span className="font-semibold mr-2">Schemas Found:</span> 
                      <span>{validationResults.count}</span>
                    </div>
                    
                    {validationResults.schemas.map((result, index) => (
                      <div key={index} className="border rounded-md p-4">
                        <div className="flex justify-between items-center mb-2">
                          <span className="font-semibold">
                            Schema {index + 1}: {result.schema['@type'] || 'Unknown Type'}
                          </span>
                          <span className={result.validation.valid ? "text-green-500" : "text-red-500"}>
                            {result.validation.valid ? 'Valid' : 'Invalid'}
                          </span>
                        </div>
                        
                        {!result.validation.valid && (
                          <div className="mt-2 text-red-500 text-sm">
                            <strong>Errors:</strong>
                            <ul className="list-disc pl-5">
                              {result.validation.errors.map((error, i) => (
                                <li key={i}>{error}</li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
                
                {validationResults && validationResults.error && (
                  <div className="text-red-500">
                    <p>{validationResults.error}</p>
                    <p className="text-sm">{validationResults.message}</p>
                  </div>
                )}
              </div>
            </TabsContent>
            
            <TabsContent value="meta" className="mt-0">
              <div className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  Validate meta tags including title, description, canonical URL, and social media tags.
                </p>
                
                {validationResults && validationResults.title && (
                  <div className="space-y-4 mt-4">
                    <div className="border rounded-md p-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-semibold">Page Title</span>
                        <span className={validationResults.title.validation.valid ? "text-green-500" : "text-amber-500"}>
                          {validationResults.title.validation.valid ? 'Optimized' : 'Needs Improvement'}
                        </span>
                      </div>
                      <p className="text-sm">{validationResults.title.text}</p>
                      {!validationResults.title.validation.valid && (
                        <ul className="list-disc pl-5 mt-2 text-amber-500 text-sm">
                          {validationResults.title.validation.suggestions.map((suggestion, i) => (
                            <li key={i}>{suggestion}</li>
                          ))}
                        </ul>
                      )}
                    </div>
                    
                    <div className="border rounded-md p-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-semibold">Meta Description</span>
                        <span className={validationResults.description.validation.valid ? "text-green-500" : "text-amber-500"}>
                          {validationResults.description.validation.valid ? 'Optimized' : 'Needs Improvement'}
                        </span>
                      </div>
                      <p className="text-sm">{validationResults.description.text}</p>
                      {!validationResults.description.validation.valid && (
                        <ul className="list-disc pl-5 mt-2 text-amber-500 text-sm">
                          {validationResults.description.validation.suggestions.map((suggestion, i) => (
                            <li key={i}>{suggestion}</li>
                          ))}
                        </ul>
                      )}
                    </div>
                    
                    <div className="border rounded-md p-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-semibold">Canonical URL</span>
                      </div>
                      <p className="text-sm break-all">{validationResults.canonical || 'Not set'}</p>
                    </div>
                    
                    <div className="border rounded-md p-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-semibold">Open Graph Tags</span>
                        <span className={validationResults.openGraph.valid ? "text-green-500" : "text-amber-500"}>
                          {validationResults.openGraph.valid ? 'Present' : 'Incomplete'}
                        </span>
                      </div>
                      {validationResults.openGraph.tags.length > 0 ? (
                        <ul className="text-sm space-y-1">
                          {validationResults.openGraph.tags.map((tag, i) => (
                            <li key={i}>
                              <span className="font-mono">{tag.property}</span>: {tag.content}
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <p className="text-red-500 text-sm">No Open Graph tags found</p>
                      )}
                    </div>
                    
                    <div className="border rounded-md p-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-semibold">Twitter Card Tags</span>
                        <span className={validationResults.twitter.valid ? "text-green-500" : "text-amber-500"}>
                          {validationResults.twitter.valid ? 'Present' : 'Incomplete'}
                        </span>
                      </div>
                      {validationResults.twitter.tags.length > 0 ? (
                        <ul className="text-sm space-y-1">
                          {validationResults.twitter.tags.map((tag, i) => (
                            <li key={i}>
                              <span className="font-mono">{tag.name}</span>: {tag.content}
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <p className="text-red-500 text-sm">No Twitter Card tags found</p>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </TabsContent>
          </CardContent>
          
          <CardFooter>
            <Button onClick={handleValidate} disabled={isValidating}>
              {isValidating ? 'Validating...' : 'Validate Current Page'}
            </Button>
          </CardFooter>
        </Tabs>
      </Card>
    </div>
  );
};

export default SEODashboard;
