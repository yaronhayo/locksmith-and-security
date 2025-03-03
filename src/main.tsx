
import React from 'react'
import './index.css'
import { setupGlobalErrorHandlers, setupWhiteScreenDetection } from './utils/errorHandlers';
import { checkForCSPIssues } from './utils/cspUtils';
import { initializeApp } from './utils/appInitialization';

// Setup error handling
setupGlobalErrorHandlers();

// Check for white screen issues
setupWhiteScreenDetection();

// Check for CSP issues that might prevent scripts from loading
console.log('Checking for potential CSP issues at startup...');
checkForCSPIssues();

// Initialize the application
initializeApp();
