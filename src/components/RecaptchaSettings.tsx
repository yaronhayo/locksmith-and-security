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
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="apiKey">reCAPTCHA Enterprise API Key</Label>
        <Input
          id="apiKey"
          type="password"
          value={apiKey}
          onChange={(e) => setApiKey(e.target.value)}
          placeholder="Enter your reCAPTCHA Enterprise API key"
          required
        />
      </div>
      <Button type="submit">Save API Key</Button>
    </form>
  );
};

export default RecaptchaSettings;