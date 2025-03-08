
  
    // Profile Picture Upload
    const profilePicture = document.getElementById('profile-picture');
    const pictureUpload = document.getElementById('picture-upload');
    const changePictureBtn = document.querySelector('.change-picture-btn');
  
    changePictureBtn.addEventListener('click', () => {
      pictureUpload.click();
    });
  
    pictureUpload.addEventListener('change', (e) => {
      const file = e.target.files[0];
      if (file) {
        // Show loading state
        profilePicture.classList.add('loading');
  
        // Simulate upload delay
        setTimeout(() => {
          const reader = new FileReader();
          reader.onload = (e) => {
            profilePicture.src = e.target.result;
            profilePicture.classList.remove('loading');
          };
          reader.readAsDataURL(file);
        }, 1000);
      }
    });
  
    // Profile Form Submission
    const profileForm = document.getElementById('profile-form');
    profileForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      // Show loading state
      const submitBtn = profileForm.querySelector('.btn-primary');
      submitBtn.classList.add('loading');
      submitBtn.disabled = true;
  
      // Simulate API call
      setTimeout(() => {
        submitBtn.classList.remove('loading');
        submitBtn.disabled = false;
        alert('Profile updated successfully!');
      }, 1500);
    });
  
    // Password Form Submission
    const passwordForm = document.getElementById('password-form');
    passwordForm.addEventListener('submit', (e) => {
      e.preventDefault();
  
      const currentPassword = document.getElementById('current-password').value;
      const newPassword = document.getElementById('new-password').value;
      const confirmPassword = document.getElementById('confirm-password').value;
  
      if (newPassword !== confirmPassword) {
        alert('New passwords do not match!');
        return;
      }
  
      // Show loading state
      const submitBtn = passwordForm.querySelector('.btn-primary');
      submitBtn.classList.add('loading');
      submitBtn.disabled = true;
  
      // Simulate API call
      setTimeout(() => {
        submitBtn.classList.remove('loading');
        submitBtn.disabled = false;
        alert('Password updated successfully!');
        passwordForm.reset();
      }, 1500);
    });
  
    // Delete Account
    const deleteAccountBtn = document.getElementById('delete-account');
    deleteAccountBtn.addEventListener('click', () => {
      const confirmed = confirm('Are you sure you want to delete your account? This action cannot be undone.');
      
      if (confirmed) {
        deleteAccountBtn.classList.add('loading');
        deleteAccountBtn.disabled = true;
  
        // Simulate API call
        setTimeout(() => {
          window.location.href = '/login.html';
        }, 2000);
      }
    });
  
    // Navigation
    const navItems = document.querySelectorAll('[data-page]');
    navItems.forEach(item => {
      item.addEventListener('click', () => {
        const page = item.dataset.page;
        
        if (page === 'logout') {
          const confirmed = confirm('Are you sure you want to logout?');
          if (confirmed) {
            window.location.href = '/login';
          }
        }
  
        // Update active states
        document.querySelectorAll('.active').forEach(el => el.classList.remove('active'));
        document.querySelectorAll(`[data-page="${page}"]`).forEach(el => el.classList.add('active'));
  
        // Show loading state
        const content = document.querySelector('.content');
        content.classList.add('loading');

        if (page === 'profile') {
          document.getElementById('profile').style.display = 'block';
        } else {
          document.getElementById('profile').style.display = 'none';
        }
  
        // Simulate page load
        setTimeout(() => {
          content.classList.remove('loading');
          // Here you would normally update the page content
        }, 1000);
      });
    });