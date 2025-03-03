
import React from 'react'
import './index.css'
import { setupGlobalErrorHandlers, setupWhiteScreenDetection, detectQuirksMode } from './utils/errorHandlers';
import { checkForCSPIssues, setupPartitionedCookies } from './utils/cspUtils';
import { initializeApp } from './utils/appInitialization';

// Setup error handling
setupGlobalErrorHandlers();

// Check for white screen issues
setupWhiteScreenDetection();

// Check for quirks mode issues
detectQuirksMode();

// Check for CSP issues that might prevent scripts from loading
console.log('Checking for potential CSP issues at startup...');
checkForCSPIssues();

// Setup partitioned cookies (for browsers that support it)
setupPartitionedCookies();

// Initialize the application
initializeApp();
