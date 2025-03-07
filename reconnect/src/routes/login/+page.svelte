<script>
    import { onMount } from "svelte";
    import { goto } from "$app/navigation";
    
    let email = "";
    let password = "";
    let rememberMe = false;
    let showPassword = false;
  
    function togglePassword() {
      showPassword = !showPassword;
    }
    async function handleLogin() {
      // Simulate login logic (Replace with actual authentication)
      if (email === "admin@gmail.com" && password === "password123") {
         goto('/dashboard/index.html');  // Redirect to the dashboard
      } else {
         alert("Invalid credentials");
      }
   }
  
    /**
	 * @param {{ preventDefault: () => void; }} event
	 */
    // function handleSubmit(event) {
    //   event.preventDefault();
    //   if (email && password) {
    //     console.log("Email:", email);
    //     console.log("Password:", password);
    //     console.log("Remember Me:", rememberMe);
    //     alert("Login Successful!");
    //   } else {
    //     alert("Please fill in both fields.");
    //   }
    // }
    import bgImage from '$lib/components/LandingPage/cheerful-elders.jpg';
  </script>
  
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      /* font-family: Arial, sans-serif; */
    }
  
    .login-container {
      margin-top: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      min-height: 100vh;
      /* background: url('/cheerful_elders.jpg'); */
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      backdrop-filter: blur(15px);
    }
  
    .login-container::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.4));
      z-index: 1;
    }
  
    .login-card {
      background-color: rgba(0, 0, 0, 0.6);
      color: white;
      backdrop-filter: blur(5px);
      padding: 30px;
      border-radius: 10px;
      box-shadow: 0 0 10px #b0601f;
      text-align: center;
      width: 470px;
      animation: fadeIn 0.6s ease-in-out;
      z-index: 1;
    }
  
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(-20px); }
      to { opacity: 1; transform: translateY(0); }
    }

    h2 {
        font-weight: 900;
        font-size: 25px;
        color: #b0601f;
        margin-bottom: 15px;
    }
  
    .input-group {
      margin-bottom: 15px;
      text-align: left;
    }

    .input-group label {
        display: block;
        margin-bottom: 5px;
        font-weight: 650;
        font-size: 16px;
    }
  
    .input-group input {
      width: 100%;
      padding: 10px;
      border: 2px solid rgba(205, 202, 202, 0.7);
      border-radius: 5px;
      background: hwb(193 68% 5% / 0.201);
      color: white;
      font-size: 15px;
      z-index: 1;
      transition: border-color 0.3s;
    }

    .input-group input::placeholder {
        color: rgba(255,255,255,0.7);
    }

    .input-group input:focus{
        border-color: #b0601f;
        outline: none;
        box-shadow: 0 0 5px rgba(176,96,31,0.5);
    }
  
    .password-container {
      position: relative;
      width: 100%;
    }

    .password-container input{
        width: 100%;
        padding-right: 40px;
    }
  
    .show-password {
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

    .show-password:hover {
        background: #8a4b14;
    }

    .forgot-password {
        font-weight: bold;
        transition: 0.3s;
    }

    .forgot-password:hover {
        text-decoration: underline;
        color: #8a4b14;
    }

    .remember-forgot {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 15px;
        font-size: 15px;
    }

    .remember-forgot .forgot-password {
        text-decoration: none;
        color: #b0601f;
    }

    .remember-forgot label {
        font-weight: 600;
    }
  
    .login-btn {
      font-size: large;
      font-weight: bold;
      width: 100%;
      padding: 10px;
      background: #b0601f;
      color: white;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      transition: 0.3s;
      transition: background 0.3s, transform 0.2s;
    }

    .login-btn:active {
        transform: scale(0.98);
    }
  
    .login-btn:hover {
      background: #8a4b14;
      transform: scale(1.05);
    }

    .social-login p {
        font-weight: bold;
        margin: 15px 0;
    }

    .social-icons {
        display: flex;
        flex-direction: row;
        justify-content: center;
        gap: 10px;
    }
    .social-icons button {
        color: #ffffff;
        font-weight: 700;
        display: flex;
        align-items: center;
        gap: 5px;
        border: none;
        padding: 8px 12px;
        border-radius: 5px;
        cursor: pointer;
        transition: 0.3s;
        background: #a9a7a7;
        box-shadow: 0 2px 5px rgba(0,0,0,0.1);
    }

    .social-icons button:hover {
        background: #6c6c6c;
        transform: scale(1.05);
    }

    .social-icons img {
        width: 20px;
        height: 20px;
    }

    .signup-link {
        margin-top: 15px;
    }

    .signup-link a {
        font-weight: bold;
        text-decoration: none;
        color: #b0601f;
    }

    @media (max-width: 600px) {
        .login-card {
            width: 100%;
            max-width: 300px;
            padding: 20px;
            margin-top: 0;
        }
        .social-icons {
            flex-wrap: wrap;
            gap: 5px;
        }
        .social-icons button {
            flex: 1;
            min-width: 45%;
            padding: 8px;
        }
        .remember-forgot {
            flex-direction: row;
            align-items: flex-start;
            gap: 5px;
        }
    }
  </style>
  
  <div class="login-container" style={`background-image: url('${bgImage}');`}>
    <div class="login-card">
      <h2>Log In</h2>
      <!-- <form on:submit={handleSubmit}> -->
      <form on:submit|preventDefault={handleLogin}>
        <div class="input-group">
          <label for="email">Email</label>
          <input type="email" id="email" bind:value={email} placeholder="Enter your email" required>
        </div>
        <div class="input-group">
          <label for="password">Password</label>
          <div class="password-container">
            <input type={showPassword ? "text" : "password"} id="password" bind:value={password} placeholder="Enter your password" required>
            <button type="button" class="show-password" on:click={togglePassword}>
              {showPassword ? "👁️‍🗨️" : "👁"}
            </button>
          </div>
        </div>
        <div class="remember-forgot">
          <label>
            <input type="checkbox" bind:checked={rememberMe}> Remember me
          </label>
          <!-- svelte-ignore a11y_invalid_attribute -->
          <a href="#" class="forgot-password">Forgot password?</a>
        </div>
        <button type="submit" class="login-btn">Log In</button>
      </form>
      <div class="social-login">
          <p>Or continue with</p>
          <div class="social-icons">
              <button class="google-btn"><img src="data:image/jpeg;base64,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" alt="Google">Google</button>
              <button class="linkedin-btn"><img src="data:image/png;base64,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" alt="LinkedIn">LinkedIn</button>
              <button class="facebook-btn"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAclBMVEU6VZ/////p7PR8jLzz9fkwTpySn8czUJ2ElMItTJs7WKOpss+msNAnSJnK0eT6+v2Xps3f4+9cca5KY6fU2upSaalDXaVme7SKmcScqMvP1OTj5vDs7/XGzeIiRZhZca+1vtqxutW+x+B2h7mAjrxugLacEYxHAAADBklEQVR4nO3baXLiMBBAYQdsFDkGwr4MJEAy97/iMPmdOLJUortV7x3Apa8Mkhe5qoiIiIiIiIiIiIiIiIiI1Oecaxrfm5MeY3TOT5vtZvexP3S97Y0SfbM8HBeLP6NTPe/t6TyVHmtE/u29W9Tzp6Bm5oSuWnanMJxJoWt3lwE8e0K3G3T+zAn9/e830GdL6J/Xg32mhO516A/UltC1L4HLg1GhW52jfGaEbjd8ijEldMtRLNCG0K1iJlFLwvYWDzQhdC8JQAtCP6nLFjYf8bOMCaHbzJKA+oXVPg2oX7hJWChMCN0kEaheuI26nzAk9F0qULuwTQYqFzapE6l64fRYunCVdL1mQNjs4x5c2BH62CcXZoSb6EcXRoTuOXm5v3dULPTdgL9hfbwcXr9rrPj9oQ9+B1PPxtXU++a7FAOrJnSiWY9VO36uDbz3va0a6aFGtgq7orlsbZ7A+1T6HnTzO9tYBQY+yT99mAVWLugh27WVHmd8bhwgHBk+hWHC40Z6mAkFCW9WF4r/BQlfvPQwEwoR1ofSz2E9Qag5hAj1hxCh/hAi1B9ChPpDiFB/CBHqDyFCJbmf80FC33OEr4R9y+ef++x+3xE1v3z2HOEr2XdTPuk7g7Bkf8YPENZvpQvXshuGHiC8yL6ceoDwtfj/ofCmrwcIl8ULV6LABwhP29KFa1ngA4S34oVd8cJJ8ULpTWH5hbvShSfhBT+/cC29sS+78Cx8SZNfeBW+pMkvPAgD8wsn0juIsws/SxeO/pYuXOyEgdmF8l+b5BbepJfD7EL5z01yCzvxnfyZhXP5d2+ZhSfx5TC3cCG+HOYWrqXvDrMLZ+KLRW7hWdp3F16zCm/ii0VVtT2F7cVwPUeQ1v1WE7YXQ3qYCRWyn6YnhAj1hxCh/hAi1B9ChPpDiFB/CBHqDyFC/SFEqD+ECPWHEKH+ECLUH0KE+kOIUH8IEeoPIUL9IUSoP4QI9YcQof4QItQfQoT6Q4hQfwgR6g8hQv0hRKg/hAj1hxCh/hAi1B9ChAP6B1ndUcZ6wYWaAAAAAElFTkSuQmCC" alt="Facebook">Facebook</button>
              <button class="x-btn"><img src="data:image/png;base64,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" alt="X">X</button>
            </div>
      </div>
      <p class="signup-link" style="font-weight: bold;">Don't have an account? <a href='signup'>Sign up</a></p>
    </div>
  </div>
  