
/**
 * Utilities for handling advertisement-related functionality
 */

/**
 * Safely joins an ad interest group with correct parameters
 * Handles the dailyUpdateUrl -> updateUrl deprecation
 */
export const safeJoinAdInterestGroup = (
  group: InterestGroup,
  lifespan: number
): Promise<void> => {
  // Make a copy of the group object to avoid modifying the original
  const updatedGroup = { ...group };
  
  // Check if the group has a dailyUpdateUrl property and handle deprecation
  if ('dailyUpdateUrl' in updatedGroup && !('updateUrl' in updatedGroup)) {
    // @ts-ignore - We know dailyUpdateUrl exists from the check above
    updatedGroup.updateUrl = updatedGroup.dailyUpdateUrl;
    // @ts-ignore - Delete the deprecated property
    delete updatedGroup.dailyUpdateUrl;
  }
  
  // Safely call the navigator.joinAdInterestGroup API if it exists
  if (
    navigator && 
    'joinAdInterestGroup' in navigator &&
    typeof navigator.joinAdInterestGroup === 'function'
  ) {
    return navigator.joinAdInterestGroup(updatedGroup, lifespan);
  }
  
  // Return a resolved promise if the API is not available
  return Promise.resolve();
};

/**
 * Leave an ad interest group safely
 */
export const safeLeaveAdInterestGroup = (
  options: { owner: string; name: string }
): Promise<void> => {
  if (
    navigator && 
    'leaveAdInterestGroup' in navigator &&
    typeof navigator.leaveAdInterestGroup === 'function'
  ) {
    return navigator.leaveAdInterestGroup(options);
  }
  
  return Promise.resolve();
};
