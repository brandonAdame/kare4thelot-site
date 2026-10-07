interface ImportMetaEnv {
  readonly SUPABASE_URL: string;
  readonly SUPABASE_KEY: string;
  readonly PAYMENT_URL: string;
  readonly PUBLIC_FORM_CARRY_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
