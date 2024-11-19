const config = {
    appwriteURL: String(import.meta.env.VITE_APPWRITE_URL),
    appwriteProjectId: String(import.meta.env.VITE_PROJECT_ID),
    emailJsServiceId: String(import.meta.env.VITE_EMAILJS_SERVICE_ID),
    emailJsTemplateId: String(import.meta.env.VITE_EMAILJS_TEMPLATE_ID),
    emailJsPublicKey: String(import.meta.env.VITE_EMAILJS_PUBLIC_KEY),
}

export default config;