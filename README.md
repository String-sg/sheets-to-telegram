# sheets-to-telegram
How to configure Telegram to pull information from Google Sheets and send it as a message

### Problem
This provides a simple interface for student to retrieve their own health data
Specific context: we administered body composition data collection as part of Outdoor Adventure Club (CCA) and recorded student health data
Students sometimes wanted historic data. Teachers manually queried and provided.

### Target
Students wanting access to their own data

### Solution
Instead of relying on teacher mediation on every manual data query,

### Known issues
Important note: There is no profound auth mechanism to ensure data security

### Next steps
[] Register student_id on /start for access token
[] In-line Telegram button/ keyboard for common operations, including BMI calculation (else compute it as a row on gsheets)
[] For more sensitive information: **Key Steps for Encryption**
- Add Encryption Functions
- Use a library like CryptoJS for encryption and decryption.
- Store a secure SECRET_KEY.
- Encrypt Data When Saving to Google Sheets
- Modify your sheet-writing logic to encrypt sensitive data.
- Decrypt Data When Fetching from Google Sheets
- Update your query functions to decrypt the data after verifying the student’s access.
- Verify Access to ensure only authorized users can access their data.
