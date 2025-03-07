<script>
    import { goto } from '$app/navigation';
    
    /**
	 * @param {string} page
	 */
    function navigateTo(page) {
      goto('/' + page);
    }
    import logo from '$lib/components/LandingPage/77c2e071-b2e8-4808-8b33-c1436f9c1ee2.webp';
    import bgImage from '$lib/components/LandingPage/cheerful-elders.jpg';    
</script>  

<!-- svelte-ignore css_unused_selector -->
<style>
    .logo-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 3px;
    }

    .logo-container h2 {
        margin-top: -1px;
        font-size: 16px;
        font-weight: 800;
    }

    .logo {
        height: 70px;
        width: 100px;
        margin-top: 10px;
        border-radius: 10px;
    }

    .navbar {
        display: flex;
        justify-content: space-between;
        align-items: center; 
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        padding: 10px 5%;
        padding-bottom: 10px;
        background: rgba(176, 96, 31, 0);
        backdrop-filter: blur(5px);
        z-index: 1000;
    }

    .navbar h2 {
        color: #3e230d;
    }

    .nav-links {
        display: flex;
        gap: 1px;
        flex-wrap: wrap;
        justify-content: flex-end;
        width: 100%;
    }

    .nav-links button {
        font-size: large;
        font-weight: bold;
        min-width: 80px;
        white-space: nowrap;
        margin-left: 15px;
        padding: 6px 15px;
        font-size: 18px;
        border: none;
        cursor: pointer;
        border-radius: 8px;
        background-color: #b0601f;
        color: white;
        transition: all 0.3s ease;
    }

    @media (max-width: 600px) {
        .nav-links {
            flex-direction: row;
            justify-content: center;
            width: auto;
        }

        .nav-links button {
            font-size: 16px;
            padding: 8px 14px;
        }

        .logo-container {
            flex-direction: column;
            align-items: center;
            gap: 5px;
        }

        .logo {
            height: 50px;
            width: 80px;
        }

        .logo-container h2 {
            font-size: large;
        }
    }

    .nav-links button:hover {
        background-color: #8a4b14;
        transform: scale(1.05);
    }

    .hero {
        color: #252424;
        background-size: cover;
        background-position: center;
        background-attachment: fixed;
        margin-top: 1px;
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        text-align: center;
        padding: 20px;
        padding-top: 80px;
        position: relative;
    }

    .hero::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.4)); 
        z-index: 1;
    }

    .hero h1 {
        font-size: 3.5rem;
        font-weight: bolder;
        color: white;
        z-index: 2;
        margin-bottom: 15px;
    }

    .hero p {
        font-size: 2.0rem;
        font-weight: bold;
        color: #f5f5f5;
        z-index: 2;
        max-width: 600px;
    }

    .get-started-btn {
        font-size: large;
        font-weight: bold;
        z-index: 2;
        margin-top: 30px;
        padding: 15px 35px;
        font-size: 20px;
        background-color: #b0601f;
        color: white;
        border: none;
        border-radius: 10px;
        cursor: pointer;
        transition: all 0.3s ease-in-out;
    }

    .get-started-btn:hover {
        background-color: #8a4b14;
        transform: scale(1.05);
    }

    .reviews {
        background: #dbd7d7;
        padding: 60px 20px;
        text-align: center;
    }

    .reviews h2 {
        font-size: 2.5rem;
        font-weight: bolder;
        color: #b0601f;
        margin-bottom: 20px;
    }

    .reviews-container{
        display: flex;
        justify-content: center;
        gap: 20px;
        flex-wrap: wrap;
    }

    .review {
        font-size: larger;
        font-weight: bold;
        max-width: 400px;
        padding: 20px;
        background: #f5f2f2;
        border-radius: 10px;
        box-shadow: 0px 4px 6px #f6921e;
        transition: 0.3s;
    }

    .review:hover {
        transform: scale(1.05);
    }

    .review strong {
        color: #b0601f;
    }

    .footer {
        background-color: #b0601f;
        font-size: large;
        font-weight: bold;
        color: white;
        text-align: center;
        padding: 30px;
        font-size: 18px;
    }
</style>

<header class="navbar">
    <div class="logo-container">
        <img src="{logo}" class="logo" alt="Reconnect Logo">
        <h2>RECONNECT</h2>
    </div>
    <div class="nav-links">
        <button on:click={() => navigateTo('login')}>Log In</button>
        <button on:click={() => navigateTo('signup')}>Sign Up</button>
    </div>
</header>

<section class="hero" style={`background-image: url('${bgImage}');`}>
    <h1>Welcome to Reconnect!</h1>
    <p>Reconnect with your childhood friends and relive the memories.</p>
    <button class="get-started-btn" on:click={() => navigateTo('signup')}>Get Started</button>
</section>

<section class="reviews">
    <h2>What Our Users Say</h2>
    <div class="reviews-container">
        <div class="review">
            <p>"This app helped me reconnect with my best friend from school! Amazing experience."</p>
            <strong>- John Doe</strong>
        </div>
        <div class="review">
            <p>"A beautiful way to rekindle old friendships. The interface is so easy to use!"</p>
            <strong>- Mary Smith</strong>
        </div>
        <div class="review">
            <p>"I found my childhood neighbor thanks to Reconnect. It's truly magical!"</p>
            <strong>- Peter Johnson</strong>
        </div>
    </div>
</section>

<footer class="footer">
    <p>&copy; 2025 Reconnect. All Rights Reserved.</p>
</footer>
