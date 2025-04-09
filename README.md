# Error Reproduction Guide: Remotion Lambda

This document outlines the steps to reproduce an error encountered when using Remotion Lambda.

## Prerequisites

- Node.js installed
- AWS credentials configured
- Remotion CLI installed

## Steps to Reproduce

1. Deploy Lambda functions:
   ```
   npx remotion lambda functions deploy
   ```

2. Create a Remotion site:
   ```
   npx remotion lambda sites create src/index.ts --site-name=my-name
   ```

3. Attempt to render a composition:
   ```
   npx remotion lambda render https://fake.com MyComp
   ```

## Unintended Behavior
Error loops infinitely as seen in discord messages/ AWS console, async event age continously increasing.

## Additional Information

- Remotion version: 4.0.284
