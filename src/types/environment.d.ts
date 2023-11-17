export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NEXT_PUBLIC_CMS_API_TOKEN: string;
      CMS_API_TOKEN: string;
      NEXT_PUBLIC_CMS_APP_URL: string;
      NEXT_PUBLIC_CMS_API_URL: string;
      NEXT_PUBLIC_FOOTER_NAV_HANDLE: string;
      NEXT_PUBLIC_HEADER_NAV_HANDLE: string;

      NEXT_PUBLIC_STREAMING_API_URL: string;
      NEXT_PUBLIC_JW_PLAYER: string;

      DISABLE_SENTRY: string;
      ENV: 'test' | 'dev' | 'prod';
    }
  }
}
