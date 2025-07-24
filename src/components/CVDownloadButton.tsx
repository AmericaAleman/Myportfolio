import { Button } from "./ui/button";
import { Download } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import { downloadCVPDF } from "../utils/downloadCV";
import { toast } from "sonner";

interface CVDownloadButtonProps {
  variant?: "default" | "outline" | "ghost" | "destructive" | "secondary" | "link";
  size?: "default" | "sm" | "lg" | "icon";
  className?: string;
}

export function CVDownloadButton({ 
  variant = "outline", 
  size = "lg",
  className = ""
}: CVDownloadButtonProps) {
  const { t, language } = useLanguage();
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownloadCV = async () => {
    setIsDownloading(true);
    toast.loading(t('downloadingCV'), {
      id: 'cv-download'
    });

    try {
      await downloadCVPDF(language);
      toast.success(t('cvDownloadSuccess'), {
        id: 'cv-download'
      });
    } catch (error) {
      console.error('Error downloading CV:', error);
      toast.error(t('cvDownloadError'), {
        id: 'cv-download'
      });
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <Button 
      variant={variant}
      size={size}
      className={`${variant === 'outline' ? 'border-primary text-primary hover:bg-primary hover:text-primary-foreground' : ''} transition-all duration-300 ${className}`}
      onClick={handleDownloadCV}
      disabled={isDownloading}
    >
      <Download className={`w-4 h-4 mr-2 ${isDownloading ? 'animate-bounce' : ''}`} />
      {isDownloading ? t('downloadingCV') : t('downloadCV')}
    </Button>
  );
}