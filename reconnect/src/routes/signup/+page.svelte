<script>
    import { onMount } from 'svelte';
    let firstName = '';
    let lastName = '';
    let email = '';
    let password = '';
    let confirmPassword = '';
    let hometown = '';
    let school = '';
    let interests = '';
    let termsAccepted = false;
    let showPassword = false;
    let showConfirmPassword = false;

    /**
	 * @param {string} field
	 */
    function togglePassword(field) {
        if (field === 'password') showPassword = !showPassword;
        if (field === 'confirmPassword') showConfirmPassword = !showConfirmPassword;
    }

    /**
	 * @param {{ preventDefault: () => void; }} event
	 */
    function handleSubmit(event) {
        event.preventDefault();
        alert(`Sign-up successful for: ${firstName} ${lastName}`);
    }
    import bgImage from '$lib/components/LandingPage/cheerful-elders.jpg';
</script>

<style>
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    .signup-container {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        min-height: 100vh;
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        backdrop-filter: blur(15px);
        animation: fadeIn 0.8s ease-in-out;
    }

    .signup-container::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4));
        z-index: 1;
    }

    .signup-form {
        position: relative;
        background: rgba(0, 0, 0, 0.6);
        color: white;
        padding: 30px;
        border-radius: 10px;
        box-shadow: 0px 0px 10px #b0601f;
        text-align: center;
        max-width: 450px;
        width: 100%;
        animation: slideUp 0.8s ease-in-out;
        backdrop-filter: blur(5px);
        z-index: 1;
    }

    .signup-form h2 {
        font-weight: 900;
        font-size: 25px;
        color: #b0601f;
        margin-bottom: 10px;
    }

    .input-group {
        margin-bottom: 15px;
        text-align: left;
    }

    .input-group label {
        display: block;
        font-weight: 650;
        font-size: 16px;
        margin-bottom: 5px;
    }

    .input-group input, .input-group textarea {
        width: 100%;
        padding: 10px;
        border: 2px solid rgba(205, 202, 202, 0.7);
        border-radius: 5px;
        background: rgba(193, 225, 255, 0.2);
        color: white;
        transition: border-color 0.3s;
        z-index: 1;
        font-size: 15px;
    }

    .input-group textarea {
        height: 100px;
        resize: vertical;
    }

    .input-group input:focus, .input-group textarea:focus {
        border-color: #b0601f;
        outline: none;
        box-shadow: 0 0 5px rgba(176,96,31,0.5);
    }

    .input-group input::placeholder, .input-group textarea::placeholder {
        color: rgba(255,255,255,0.7);
    }

    .password-wrapper {
        position: relative;
        width: 100%;
    }

    .password-wrapper input {
        width: 100%;
        padding-right: 40px;
    }

    .toggle-password {
        position: absolute;
        right: 10px;
        top: 50%;
        transform: translateY(-50%);
        cursor: pointer;
        background: #b0601f;
        border: none;
        border-radius: 5px;
        padding: 4px;
        color: black;
        font-weight: bold;
        font-size: 18px;
    }

    .toggle-password:hover {
        background: #8a4b14;
    }

    .checkbox-group {
        display: flex;
        align-items: center;
        gap: 5px;
        margin-bottom: 15px;
    }

    .checkbox-group input {
        accent-color: #b0601f;
    }

    .checkbox-group label {
        color: white;
        font-size: 15px;
        font-weight: 500;
    }

    .checkbox-group a {
        color: lightblue;
        text-decoration: none;
        font-weight: 500;
    }

    .signup-btn {
        font-size: large;
        font-weight: bold;
        width: 100%;
        padding: 10px;
        background: #b0601f;
        border: none;
        border-radius: 5px;
        color: white;
        cursor: pointer;
        font-size: 16px;
        transition: background 0.3s, transform 0.2s;
    }

    .signup-btn:active {
        transform: scale(0.98);
    }

    .signup-btn:hover {
        background: #b0601f;
        transform: scale(1.05);
    }

    .login-link {
        margin-top: 15px;
    }

    .login-link a {
        color: #b0601f;
        text-decoration: none;
        font-weight: bold;
    }

    .login-link a:hover {
        text-decoration: underline;
    }

    .section-divider {
        margin: 20px 0;
        text-align: center;
        position: relative;
    }

    .section-divider::before {
        content: '';
        position: absolute;
        left: 0;
        top: 50%;
        width: 100%;
        height: 1px;
        background: rgba(176,96,31,0.5);
    }

    .section-divider span {
        background: rgba(0, 0, 0, 0.6);
        padding: 0 10px;
        color: #b0601f;
        position: relative;
        font-weight: bold;
    }

    @keyframes fadeIn {
        from {
            transform: translateY(20px);
            opacity: 0;
        }
        to {
            transform: translateY(0);
            opacity: 1;
        }
    }

    @media (max-width: 500px) {
        .signup-form {
            width: 95%;
        }
    }
</style>

<div class="signup-container" style={`background-image: url('${bgImage}');`}>
    <form class="signup-form" on:submit={handleSubmit}>
        <h2>Sign Up</h2>
        
        <!-- Personal Information -->
        <div class="input-group">
            <label for="first-name">First Name</label>
            <input type="text" id="first-name" bind:value={firstName} placeholder="Enter your first name" required>
        </div>
        <div class="input-group">
            <label for="last-name">Last Name</label>
            <input type="text" id="last-name" bind:value={lastName} placeholder="Enter your last name" required>
        </div>
        <div class="input-group">
            <label for="email">Email Address</label>
            <input type="email" id="email" bind:value={email} placeholder="Enter your email" required>
        </div>
        
        <!-- Account Security -->
        <div class="input-group">
            <label for="password">Password</label>
            <div class="password-wrapper">
                <input type={showPassword ? 'text' : 'password'} id="password" bind:value={password} placeholder="Enter your password" required>
                <button type="button" class="toggle-password" on:click={() => togglePassword('password')}>👁</button>
            </div>
        </div>
        <div class="input-group">
            <label for="confirm-password">Confirm Password</label>
            <div class="password-wrapper">
                <input type={showConfirmPassword ? 'text' : 'password'} id="confirm-password" bind:value={confirmPassword} placeholder="Confirm your password" required>
                <button type="button" class="toggle-password" on:click={() => togglePassword('confirmPassword')}>👁</button>
            </div>
        </div>

        <!-- Friend Matching Information -->
        <div class="section-divider">
            <span>Friend Matching Details</span>
        </div>
        
        <div class="input-group">
            <label for="hometown">Childhood Hometown</label>
            <input type="text" id="hometown" bind:value={hometown} placeholder="Enter your childhood hometown" required>
        </div>
        <div class="input-group">
            <label for="school">School Attended</label>
            <input type="text" id="school" bind:value={school} placeholder="Enter the name of your school" required>
        </div>
        <div class="input-group">
            <label for="interests">Interests & Hobbies</label>
            <textarea id="interests" bind:value={interests} placeholder="Tell us about your interests and hobbies (e.g., gardening, reading, cooking)" required></textarea>
        </div>

        <div class="checkbox-group">
            <input type="checkbox" id="terms" bind:checked={termsAccepted} required>
            <!-- svelte-ignore a11y_missing_attribute -->
            <label for="terms">I accept the <a>Terms of Use</a> and <a>Privacy Policy</a></label>
        </div>
        <button type="submit" class="signup-btn">Sign Up</button>
        <p class="login-link">Already have an account? <a href="/login">Login now</a></p>
    </form>
</div>