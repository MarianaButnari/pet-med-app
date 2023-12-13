export class ErrorConstants {
  public static readonly EMAIL_EXISTS = 'The email address is already in use by another account.';
  public static readonly OPERATION_NOT_ALLOWED = 'Password sign-in is disabled for this project.';
  public static readonly TOO_MANY_ATTEMPTS_TRY_LATER = 'We have blocked all requests from this device due to unusual activity. Try again later.';
  public static readonly INVALID_LOGIN_CREDENTIALS = 'The email address or password is badly formatted.';
  public static readonly EMAIL_NOT_FOUND = 'There is no user record corresponding to this identifier. The user may have been deleted.';
  public static readonly INVALID_PASSWORD = 'The password is invalid or the user does not have a password.';
  public static readonly USER_DISABLED = 'The user account has been disabled by an administrator.';
}

export type ErrorMessage = 'EMAIL_EXISTS' | 'OPERATION_NOT_ALLOWED' | 'TOO_MANY_ATTEMPTS_TRY_LATER' | 'INVALID_LOGIN_CREDENTIALS' | 'EMAIL_NOT_FOUND' | 'INVALID_PASSWORD' | 'USER_DISABLED';
