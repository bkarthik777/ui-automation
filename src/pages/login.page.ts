import { SafeActions } from '../utils/actions/safeActions';

class LoginPage {

    // 🔹 Locators (only selectors, no logic)
    get usernameInput() {
        return $('#user-name');
    }

    get passwordInput() {
        return $('#password');
    }

    get loginButton() {
        return $('#login-button');
    }

    get errorMessage() {
        return $('[data-test="error"]');
    }

    // 🔹 Page actions (business intent)

    async login(username: string, password: string): Promise<void> {
        await SafeActions.setValue(this.usernameInput, username);
        await SafeActions.setValue(this.passwordInput, password);
        await SafeActions.click(this.loginButton);
    }

    async getErrorMessage(): Promise<string> {
        return SafeActions.getText(this.errorMessage);
    }
}

export default new LoginPage();
