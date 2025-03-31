
import React from "react";
import { useLocation } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { createBreadcrumbSchema } from "@/components/meta/schema/BreadcrumbSchema";
import { SchemaScripts } from "@/components/meta/SchemaScripts";

interface EnhancedBreadcrumbsProps {
  baseUrl?: string;
  customPaths?: { [key: string]: string };
  includeSchema?: boolean;
  className?: string;
}

const EnhancedBreadcrumbs: React.FC<EnhancedBreadcrumbsProps> = ({
  baseUrl = "https://247locksmithandsecurity.com",
  customPaths = {},
  includeSchema = true,
  className = ""
}) => {
  // Use the current location path
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  // Generate Home link
  const breadcrumbs = [
    { name: "Home", item: "/" }
  ];

  // Generate the breadcrumbs based on the current URL path
  let currentPath = "";
  pathnames.forEach((path, index) => {
    currentPath += `/${path}`;
    
    // Get display name from custom paths or generate from path
    const displayName = customPaths[path] || path
      .replace(/-/g, " ")
      .split(" ")
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
    
    breadcrumbs.push({
      name: displayName,
      item: currentPath
    });
  });

  // Generate schema
  const breadcrumbSchema = includeSchema
    ? createBreadcrumbSchema({ breadcrumbs, baseUrl })
    : null;

  return (
    <>
      <nav className={`text-sm md:text-base py-2 my-2 ${className}`} aria-label="Breadcrumb">
        <ol className="flex flex-wrap items-center space-x-1">
          {breadcrumbs.map((crumb, index) => (
            <React.Fragment key={index}>
              {index > 0 && (
                <li className="flex items-center">
                  <ChevronRight className="h-4 w-4 text-gray-500" />
                </li>
              )}
              <li className="flex items-center">
                {index === breadcrumbs.length - 1 ? (
                  <span className="text-blue-700 font-medium" aria-current="page">
                    {crumb.name}
                  </span>
                ) : (
                  <Link
                    to={crumb.item}
                    className="text-gray-600 hover:text-blue-600 hover:underline"
                  >
                    {crumb.name}
                  </Link>
                )}
              </li>
            </React.Fragment>
          ))}
        </ol>
      </nav>
      
      {/* Add schema if needed */}
      {includeSchema && breadcrumbSchema && (
        <SchemaScripts schemas={[breadcrumbSchema]} />
      )}
    </>
  );
};

export default EnhancedBreadcrumbs;
