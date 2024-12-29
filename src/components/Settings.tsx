import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { getRecaptchaApiKey, setRecaptchaApiKey } from '@/utils/recaptcha';

export const Settings = () => {
  const { toast } = useToast();
  const [apiKey, setApiKey] = useState(getRecaptchaApiKey() || '');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setRecaptchaApiKey(apiKey);
    toast({
      title: "Settings Updated",
      description: "reCAPTCHA API key has been saved.",
    });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <Card>
        <CardHeader>
          <CardTitle>reCAPTCHA Settings</CardTitle>
          <CardDescription>
            Configure your reCAPTCHA Enterprise settings here
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="apiKey">reCAPTCHA Site Key</Label>
              <Input
                id="apiKey"
                type="password"
                value={apiKey}
                onChange={(e) => setApiKey(e.target.value)}
                placeholder="6LeQE6YqAAAAAPQkLboESEwCMnnKVkaGTbj63EPN"
                required
              />
              <p className="text-sm text-gray-500">
                Get your key from the{" "}
                <a 
                  href="https://console.cloud.google.com/security/recaptcha"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  Google Cloud Console
                </a>
              </p>
            </div>
            <Button type="submit">Save Settings</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default Settings;
