<script lang="ts">
    import { tick } from 'svelte';

    export let username: string;
    export let profilePic: string | null;

    let isLoading = true;
    let userData: { bio: string; email: string; interests: string[]; name?: string; joinDate?: string } = {
  name: '',
  email: '',
  bio: '',
  interests: [],
  joinDate: ''
};


    // Simulate loading user data with reactive update
    setTimeout(async () => {
      userData = {
        name: 'John Doe',
        email: 'john.doe@example.com',
        bio: 'I love gardening and playing chess',
        interests: ['Gardening', 'Chess', 'Reading'],
        joinDate: 'January 2024'
      };
      isLoading = false;
      await tick(); // Ensure reactivity updates
    }, 1500);

    function handleProfileUpload(event: Event) {
      const target = event.target as HTMLInputElement;
      if (target.files && target.files.length > 0) {
        const file = target.files[0];
        console.log('Uploaded file:', file);
        // Handle profile picture upload...
      }
    }

    function handleSaveChanges() {
      console.log('Saving changes...');
      // Handle saving profile changes
    }

    function handleChangePassword() {
      console.log('Changing password...');
      // Handle password change
    }

    function handleDeleteAccount() {
      if (confirm('Are you sure you want to delete your account? This action cannot be undone.')) {
        console.log('Account deleted');
        // Handle account deletion
      }
    }
</script>

  
  {#if isLoading}
    <div class="loading">
      <div class="spinner"></div>
      <p>Loading your profile...</p>
    </div>
  {:else}
    <div class="profile-page">
      <section class="profile-section">
        <h2>Profile Information</h2>
        
        <div class="profile-picture">
          {#if profilePic}
            <img src={profilePic} alt={username} />
          {:else}
            <div class="default-avatar">{username[0].toUpperCase()}</div>
          {/if}
          }
          <label class="upload-button" for="profile-upload">
            Upload Picture
            <input
              type="file"
              id="profile-upload"
              accept="image/*"
              on:change={handleProfileUpload}
              style="display: none;"
            />
          </label>
        </div>
  
        <div class="form-group">
          <label for="username">Username</label>
          <input
            type="text"
            id="username"
            bind:value={username}
            placeholder="Enter your username"
          />
        </div>
  
        {#if userData}
  <div class="form-group">
    <label for="bio">Bio</label>
    <textarea
      id="bio"
      bind:value={userData.bio}
      placeholder="Tell us about yourself"
    ></textarea>
  </div>
{/if}
          
          <div class="form-group">
            <label for="email">Email</label>
            <p class="static-field">{userData?.email}</p>
          </div>
          
          <div class="form-group">
            <label for="interests">Interests</label>
            <div class="interests-list">
                {#if userData && userData.interests}
                {#each userData.interests as interest}
                  <span class="interest-tag">{interest}</span>
                {/each}
              {/if}
            </div>
          </div>
          
  
        <button class="save-button" on:click={handleSaveChanges}>
          Save Changes
        </button>
      </section>
  
      <section class="account-section">
        <h2>Account Settings</h2>
        
        <div class="account-actions">
          <button class="change-password" on:click={handleChangePassword}>
            Change Password
          </button>
          
          <button class="delete-account" on:click={handleDeleteAccount}>
            Delete Account
          </button>
        </div>
      </section>
    </div>
  {/if}
  }
  
  <style>
    .profile-page {
      max-width: 800px;
      margin: 0 auto;
    }
  
    .loading {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 50vh;
      font-size: 1.2rem;
      color: #666;
    }
  
    .spinner {
      width: 50px;
      height: 50px;
      border: 5px solid #f3f3f3;
      border-top: 5px solid #b0601f;
      border-radius: 50%;
      animation: spin 1s linear infinite;
      margin-bottom: 1rem;
    }
  
    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
  
    section {
      background: white;
      padding: 2rem;
      border-radius: 15px;
      margin-bottom: 2rem;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }
  
    h2 {
      font-size: 2rem;
      color: #333;
      margin-bottom: 2rem;
    }
  
    .profile-picture {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-bottom: 2rem;
    }
  
    .default-avatar {
      width: 150px;
      height: 150px;
      background: #b0601f;
      color: white;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 4rem;
      margin-bottom: 1rem;
    }
  
    .upload-button {
      background: #b0601f;
      color: white;
      padding: 0.8rem 1.5rem;
      border-radius: 25px;
      cursor: pointer;
      font-size: 1.1rem;
      transition: background-color 0.3s ease;
    }
  
    .upload-button:hover {
      background: #904913;
    }
  
    .form-group {
      margin-bottom: 1.5rem;
    }
  
    label {
      display: block;
      font-size: 1.2rem;
      color: #333;
      margin-bottom: 0.5rem;
    }
  
    input, textarea {
      width: 100%;
      padding: 1rem;
      border: 1px solid #ddd;
      border-radius: 10px;
      font-size: 1.1rem;
    }
  
    textarea {
      height: 100px;
      resize: vertical;
    }
  
    .static-field {
      font-size: 1.1rem;
      color: #666;
      padding: 1rem;
      background: #f5f5f5;
      border-radius: 10px;
    }
  
    .interests-list {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
    }
  
    .interest-tag {
      background: #fff5f0;
      color: #b0601f;
      padding: 0.5rem 1rem;
      border-radius: 20px;
      font-size: 1.1rem;
    }
  
    .save-button {
      background: #b0601f;
      color: white;
      border: none;
      padding: 1rem 2rem;
      border-radius: 25px;
      font-size: 1.2rem;
      cursor: pointer;
      width: 100%;
      margin-top: 1rem;
    }
  
    .save-button:hover {
      background: #904913;
    }
  
    .account-actions {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }
  
    .change-password, .delete-account {
      padding: 1rem;
      border-radius: 10px;
      font-size: 1.2rem;
      cursor: pointer;
      width: 100%;
    }
  
    .change-password {
      background: #f5f5f5;
      border: 1px solid #ddd;
      color: #333;
    }
  
    .delete-account {
      background: #fff5f0;
      border: 1px solid #ffcdb2;
      color: #d32f2f;
    }
  
    @media (max-width: 768px) {
      section {
        padding: 1.5rem;
      }
  
      h2 {
        font-size: 1.8rem;
      }
  
      .default-avatar {
        width: 120px;
        height: 120px;
        font-size: 3rem;
      }
    }
  </style>