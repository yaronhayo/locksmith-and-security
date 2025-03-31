
import React, { useState } from 'react';
import SEODashboard from '@/components/admin/SEODashboard';
import PageLayout from '@/components/layouts/PageLayout';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const SEOAnalysisPage = () => {
  const [url, setUrl] = useState<string>('');
  const [analyzing, setAnalyzing] = useState<boolean>(false);
  
  const handleAnalyze = () => {
    if (!url) return;
    
    setAnalyzing(true);
    // This would typically connect to an API for analysis
    setTimeout(() => {
      setAnalyzing(false);
    }, 1500);
  };

  return (
    <PageLayout
      title="SEO Analysis | Locksmith & Security"
      description="Analyze and optimize your website's SEO performance"
      noindex={true} // Admin pages should be excluded from search engines
    >
      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-bold mb-8">SEO Analysis & Performance</h1>
        
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="flex-grow">
            <Input 
              placeholder="Enter URL to analyze" 
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              className="w-full"
            />
          </div>
          <Button 
            onClick={handleAnalyze} 
            disabled={analyzing || !url}
          >
            {analyzing ? 'Analyzing...' : 'Analyze'}
          </Button>
        </div>
        
        <Tabs defaultValue="current-page">
          <TabsList className="mb-6">
            <TabsTrigger value="current-page">Current Page</TabsTrigger>
            <TabsTrigger value="site-wide">Site-wide Analysis</TabsTrigger>
            <TabsTrigger value="performance">Performance</TabsTrigger>
          </TabsList>
          
          <TabsContent value="current-page">
            <SEODashboard />
          </TabsContent>
          
          <TabsContent value="site-wide">
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Site Structure</CardTitle>
                  <CardDescription>
                    Analysis of site architecture and navigation
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Select a URL to analyze the site structure
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Content Audit</CardTitle>
                  <CardDescription>
                    Analyze content quality and optimization
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Select a URL to analyze content quality
                  </p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="performance">
            <Card>
              <CardHeader>
                <CardTitle>Site Performance</CardTitle>
                <CardDescription>
                  Analysis of loading speed and performance metrics
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Select a URL to analyze performance metrics
                </p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </PageLayout>
  );
};

export default SEOAnalysisPage;
