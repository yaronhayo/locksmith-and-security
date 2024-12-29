import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { getRecaptchaApiKey, setRecaptchaApiKey } from '@/utils/recaptcha';

export const RecaptchaSettings = () => {
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
    <div className="space-y-6">
      <div className="space-y-2">
        <h2 className="text-2xl font-bold">reCAPTCHA Settings</h2>
        <p className="text-gray-600">
          To get your reCAPTCHA API key:
          1. Go to the <a href="https://www.google.com/recaptcha/admin" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Google reCAPTCHA Admin Console</a>
          2. Sign in with your Google account
          3. Create a new site registration
          4. Choose reCAPTCHA v2 "I'm not a robot"
          5. Add your domain
          6. Copy the Site Key
        </p>
      </div>
      
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
        </div>
        <Button type="submit">Save API Key</Button>
      </form>
    </div>
  );
};

export default RecaptchaSettings;
