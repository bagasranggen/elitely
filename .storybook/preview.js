import "@fontsource/poppins";
import '../styles/scss/bootstrap.scss';
import '../styles/scss/main.scss';

export const parameters = {
    actions: {argTypesRegex: "^on[A-Z].*"},
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
}