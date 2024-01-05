const amplifyConfig = {
  "aws_project_region": "us-east-1",
  "aws_user_pools_id": "us-east-1_z2FppwnhK",
  "aws_user_pools_web_client_id": "33hdk6q092hql403mglnuhs5c1",
  "aws_cognito_region": "us-east-1",
  "aws_cognito_identity_pool_id": "us-east-1:68315969-8c96-4c65-a12f-89a9da4cf959",
  "aws_cognito_signup_attributes": [
    "EMAIL"
  ],
  "aws_cognito_username_attributes": [
    "EMAIL"
  ],
  "aws_cognito_verification_mechanisms": [
    "EMAIL"
  ],
  "aws_cognito_password_protection_settings": {
    "passwordPolicyMinLength": 8,
    "passwordPolicyCharacters": [
      "REQUIRES_NUMBERS",
      "REQUIRES_LOWERCASE",
      "REQUIRES_UPPERCASE",
      "REQUIRES_SYMBOLS"
    ]
  }
}
export default amplifyConfig;
