document.addEventListener('DOMContentLoaded', function() {
    // Initialize Lucide icons
    lucide.createIcons();
    
    // Navigation functionality
    const sidebarItems = document.querySelectorAll('.sidebar li');
    const mobileNavItems = document.querySelectorAll('.mobile-nav .nav-item');
    const pages = document.querySelectorAll('.page');
    
    
    function navigateTo(pageId) {
      // Hide all pages
      pages.forEach(page => {
        page.classList.remove('active');
      });
      
      // Show selected page
      const selectedPage = document.getElementById(pageId);
      if (selectedPage) {
        selectedPage.classList.add('active');
      }
      
      // Update sidebar active state
      sidebarItems.forEach(item => {
        if (item.dataset.page === pageId) {
          item.classList.add('active');
        } else {
          item.classList.remove('active');
        }
      });
      
      // Update mobile nav active state
      mobileNavItems.forEach(item => {
        if (item.dataset.page === pageId) {
          item.classList.add('active');
        } else {
          item.classList.remove('active');
        }
      });
    }
    
    // Add click event listeners to sidebar items
    sidebarItems.forEach(item => {
      item.addEventListener('click', function() {
        navigateTo(this.dataset.page);
      });
    });
    
    // Add click event listeners to mobile nav items
    mobileNavItems.forEach(item => {
      item.addEventListener('click', function() {
        navigateTo(this.dataset.page);
      });
    });
    
    // Story clicks
    const stories = document.querySelectorAll('.story');
    stories.forEach(story => {
      story.addEventListener('click', function() {
        alert('Story feature coming soon!');
      });
    });
    
    // Quick action buttons
    const findFriendsBtn = document.querySelector('.find-friends');
    const joinEventsBtn = document.querySelector('.join-events');
    const sendMessageBtn = document.querySelector('.send-message');
    
    if (findFriendsBtn) {
      findFriendsBtn.addEventListener('click', function() {
        navigateTo('friends');
      });
    }
    
    if (joinEventsBtn) {
      joinEventsBtn.addEventListener('click', function() {
        navigateTo('events');
      });
    }
    
    if (sendMessageBtn) {
      sendMessageBtn.addEventListener('click', function() {
        navigateTo('messages');
      });
    }
    
    // View details buttons
    const viewDetailsButtons = document.querySelectorAll('.view-details');
    viewDetailsButtons.forEach(button => {
      button.addEventListener('click', function() {
        navigateTo('events');
      });
    });
    
    // See all events button
    const seeAllEventsBtn = document.querySelector('.upcoming-events .see-all');
    if (seeAllEventsBtn) {
      seeAllEventsBtn.addEventListener('click', function() {
        navigateTo('events');
      });
    }
    
    // View all messages button
    const viewAllMessagesBtn = document.querySelector('.recent-messages .see-all');
    if (viewAllMessagesBtn) {
      viewAllMessagesBtn.addEventListener('click', function() {
        navigateTo('messages');
      });
    }
    
    // Reply buttons
    const replyButtons = document.querySelectorAll('.reply');
    replyButtons.forEach(button => {
      button.addEventListener('click', function() {
        navigateTo('messages');
      });
    });
    
    // Add friend buttons
    const addFriendButtons = document.querySelectorAll('.add-friend');
    addFriendButtons.forEach(button => {
      button.addEventListener('click', function() {
        // Change button text and style after clicking
        this.textContent = 'Request Sent';
        this.style.backgroundColor = '#9ca3af';
        this.disabled = true;
      });
    });
    
    // Notifications
    const notificationIcon = document.querySelector('.notifications');
    if (notificationIcon) {
      notificationIcon.addEventListener('click', function() {
        alert('You have 3 new notifications');
      });
    }
    
    // User profile
    const userProfile = document.querySelector('.user-profile');
    if (userProfile) {
      userProfile.addEventListener('click', function() {
        navigateTo('settings');
      });
    }
    
    // Memory actions
    const memoryActions = document.querySelectorAll('.memory-action');
    if (memoryActions.length > 0) {
      memoryActions.forEach(action => {
        action.addEventListener('click', function() {
          if (this.textContent.includes('Like')) {
            this.innerHTML = '<i data-lucide="heart-handshake"></i> Liked';
            this.style.color = '#e74c3c';
            lucide.createIcons();
          } else if (this.textContent.includes('Comment')) {
            alert('Comment feature coming soon!');
          } else if (this.textContent.includes('Share')) {
            alert('Share feature coming soon!');
          }
        });
      });
    }
    
    // See more memories button
    const seeMoreMemoriesBtn = document.querySelector('.memory-flashback .see-all');
    if (seeMoreMemoriesBtn) {
      seeMoreMemoriesBtn.addEventListener('click', function() {
        navigateTo('memory-lane');
      });
    }
    
    // Community poll voting
    const voteButton = document.querySelector('.vote-button');
    const pollOptions = document.querySelectorAll('input[name="poll"]');
    
    if (voteButton) {
      voteButton.addEventListener('click', function() {
        let selected = false;
        pollOptions.forEach(option => {
          if (option.checked) {
            selected = true;
            voteButton.textContent = 'Vote Recorded';
            voteButton.disabled = true;
            voteButton.style.backgroundColor = '#9ca3af';
          }
        });
        
        if (!selected) {
          alert('Please select an option before voting');
        }
      });
    }
  
    // Friends page functionality
    const friendsTabs = document.querySelectorAll('.friends-tab');
    const friendsTabContents = document.querySelectorAll('.friends-tab-content');
  
    friendsTabs.forEach(tab => {
      tab.addEventListener('click', function() {
        // Remove active class from all tabs
        friendsTabs.forEach(t => t.classList.remove('active'));
        
        // Add active class to clicked tab
        this.classList.add('active');
        
        // Hide all tab contents
        friendsTabContents.forEach(content => {
          content.classList.remove('active');
        });
        
        // Show selected tab content
        const tabId = this.dataset.tab;
        document.getElementById(tabId).classList.add('active');
      });
    });
  
    // Friend search functionality
    const friendsSearchInput = document.getElementById('friends-search-input');
    if (friendsSearchInput) {
      friendsSearchInput.addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase();
        const friendCards = document.querySelectorAll('.friend-card');
        
        friendCards.forEach(card => {
          const name = card.querySelector('h3').textContent.toLowerCase();
          if (name.includes(searchTerm)) {
            card.style.display = 'block';
          } else {
            card.style.display = 'none';
          }
        });
      });
    }
  
    // Friend filter functionality
    const friendsFilterSelect = document.getElementById('friends-filter-select');
    if (friendsFilterSelect) {
      friendsFilterSelect.addEventListener('change', function() {
        const filterValue = this.value;
        const friendCards = document.querySelectorAll('.friend-card');
        
        friendCards.forEach(card => {
          if (filterValue === 'all') {
            card.style.display = 'block';
          } else if (filterValue === 'recent') {
            const status = card.querySelector('.friend-status').textContent.toLowerCase();
            if (status.includes('online') || status.includes('hours ago')) {
              card.style.display = 'block';
            } else {
              card.style.display = 'none';
            }
          } else if (filterValue === 'nearby') {
            // This would require location data, just showing a subset for demo
            const name = card.querySelector('h3').textContent;
            if (['Martha Johnson', 'Robert Davis'].includes(name)) {
              card.style.display = 'block';
            } else {
              card.style.display = 'none';
            }
          } else if (filterValue === 'birthday') {
            // This would require birthday data, just showing a subset for demo
            const name = card.querySelector('h3').textContent;
            if (['Elizabeth Wilson', 'John Smith'].includes(name)) {
              card.style.display = 'block';
            } else {
              card.style.display = 'none';
            }
          }
        });
      });
    }
  
    // Friend action buttons
    const friendActionBtns = document.querySelectorAll('.friend-action-btn');
    friendActionBtns.forEach(btn => {
      btn.addEventListener('click', function(e) {
        e.stopPropagation();
        const dropdown = this.nextElementSibling;
        dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
      });
    });
  
    // Close dropdowns when clicking elsewhere
    document.addEventListener('click', function() {
      const dropdowns = document.querySelectorAll('.friend-action-dropdown');
      dropdowns.forEach(dropdown => {
        dropdown.style.display = 'none';
      });
    });
  
    // Friend request buttons
    const acceptRequestBtns = document.querySelectorAll('.accept-request');
    const declineRequestBtns = document.querySelectorAll('.decline-request');
  
    acceptRequestBtns.forEach(btn => {
      btn.addEventListener('click', function() {
        const request = this.closest('.friend-request');
        request.style.backgroundColor = '#f0fdf4';
        this.textContent = 'Accepted';
        this.disabled = true;
        this.style.backgroundColor = '#10b981';
        
        // Update request count
        const requestCount = document.querySelector('.request-count');
        if (requestCount) {
          const count = parseInt(requestCount.textContent) - 1;
          requestCount.textContent = count > 0 ? count : '';
        }
      });
    });
  
    declineRequestBtns.forEach(btn => {
      btn.addEventListener('click', function() {
        const request = this.closest('.friend-request');
        request.style.display = 'none';
        
        // Update request count
        const requestCount = document.querySelector('.request-count');
        if (requestCount) {
          const count = parseInt(requestCount.textContent) - 1;
          requestCount.textContent = count > 0 ? count : '';
        }
      });
    });
  
    // Friend suggestion buttons
    const addFriendBtns = document.querySelectorAll('.add-friend-btn');
    const removeSuggestionBtns = document.querySelectorAll('.remove-suggestion');
  
    addFriendBtns.forEach(btn => {
      btn.addEventListener('click', function() {
        this.innerHTML = '<i data-lucide="check"></i> Request Sent';
        this.disabled = true;
        this.style.backgroundColor = '#9ca3af';
        lucide.createIcons();
      });
    });
  
    removeSuggestionBtns.forEach(btn => {
      btn.addEventListener('click', function() {
        const card = this.closest('.friend-card');
        card.style.display = 'none';
      });
    });
  
    // Messages page functionality
    const messagesTabs = document.querySelectorAll('.messages-tab');
    
    messagesTabs.forEach(tab => {
      tab.addEventListener('click', function() {
        // Remove active class from all tabs
        messagesTabs.forEach(t => t.classList.remove('active'));
        
        // Add active class to clicked tab
        this.classList.add('active');
        
        // Filter conversations based on tab
        const tabValue = this.dataset.tab;
        const conversations = document.querySelectorAll('.conversation-item');
        
        conversations.forEach(conversation => {
          if (tabValue === 'all-messages') {
            conversation.style.display = 'flex';
          } else if (tabValue === 'unread-messages') {
            if (conversation.classList.contains('unread')) {
              conversation.style.display = 'flex';
            } else {
              conversation.style.display = 'none';
            }
          }
        });
      });
    });
  
    // Conversation selection
    const conversationItems = document.querySelectorAll('.conversation-item');
    
    conversationItems.forEach(item => {
      item.addEventListener('click', function() {
        // Remove active class from all conversations
        conversationItems.forEach(conv => {
          conv.classList.remove('active');
        });
        
        // Add active class to clicked conversation
        this.classList.add('active');
        
        // If conversation was unread, mark as read
        if (this.classList.contains('unread')) {
          this.classList.remove('unread');
          const unreadBadge = this.querySelector('.unread-badge');
          if (unreadBadge) {
            unreadBadge.remove();
          }
          
          // Update unread count
          const unreadCount = document.querySelector('.unread-count');
          if (unreadCount) {
            const count = parseInt(unreadCount.textContent) - 1;
            unreadCount.textContent = count > 0 ? count : '';
          }
        }
        
        // Update chat header with conversation info
        const conversationName = this.querySelector('h3').textContent;
        const conversationAvatar = this.querySelector('img').src;
        const isOnline = this.querySelector('.online-status.active') !== null;
        
        const chatUserInfo = document.querySelector('.chat-user-info');
        if (chatUserInfo) {
          chatUserInfo.querySelector('img').src = conversationAvatar;
          chatUserInfo.querySelector('h3').textContent = conversationName;
          chatUserInfo.querySelector('.chat-status').textContent = isOnline ? 'Online now' : 'Offline';
          chatUserInfo.querySelector('.chat-status').style.color = isOnline ? '#10b981' : '#9ca3af';
        }
      });
    });
  
    // Message input functionality
    const messageInput = document.getElementById('message-input');
    const sendButton = document.querySelector('.chat-send-btn');
    
    if (messageInput && sendButton) {
      // Send message on Enter key
      messageInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
          sendMessage();
        }
      });
      
      // Send message on button click
      sendButton.addEventListener('click', sendMessage);
      
      function sendMessage() {
        const message = messageInput.value.trim();
        if (message) {
          // Create new message element
          const chatMessages = document.querySelector('.chat-messages');
          const newMessage = document.createElement('div');
          newMessage.className = 'message sent';
          
          const now = new Date();
          const hours = now.getHours().toString().padStart(2, '0');
          const minutes = now.getMinutes().toString().padStart(2, '0');
          const timeString = `${hours}:${minutes}`;
          
          newMessage.innerHTML = `
            <div class="message-content">
              <div class="message-bubble">
                <p>${message}</p>
              </div>
              <div class="message-info">
                <span class="message-time">${timeString}</span>
                <span class="message-status"><i data-lucide="check"></i></span>
              </div>
            </div>
          `;
          
          chatMessages.appendChild(newMessage);
          lucide.createIcons();
          
          // Clear input
          messageInput.value = '';
          
          // Scroll to bottom
          chatMessages.scrollTop = chatMessages.scrollHeight;
          
          // Simulate received message after a delay
          setTimeout(() => {
            const receivedMessage = document.createElement('div');
            receivedMessage.className = 'message received';
            
            receivedMessage.innerHTML = `
              <div class="message-avatar">
                <img src="https://images.unsplash.com/photo-1566616213894-2d4e1baee5d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80" alt="John Smith">
              </div>
              <div class="message-content">
                <div class="message-bubble">
                  <p>Thanks for your message! I'll get back to you soon.</p>
                </div>
                <div class="message-info">
                  <span class="message-time">${timeString}</span>
                </div>
              </div>
            `;
            
            chatMessages.appendChild(receivedMessage);
            chatMessages.scrollTop = chatMessages.scrollHeight;
          }, 1500);
        }
      }
    }
  
    // New message button
    const newMessageBtn = document.querySelector('.new-message-btn');
    if (newMessageBtn) {
      newMessageBtn.addEventListener('click', function() {
        alert('New message feature coming soon!');
      });
    }
  
    // Chat action buttons
    const chatActionBtns = document.querySelectorAll('.chat-action-btn');
    chatActionBtns.forEach(btn => {
      btn.addEventListener('click', function() {
        const action = this.querySelector('i').dataset.lucide;
        alert(`${action.charAt(0).toUpperCase() + action.slice(1)} feature coming soon!`);
      });
    });
  
    // Chat input buttons
    const chatInputBtns = document.querySelectorAll('.chat-input-btn');
    chatInputBtns.forEach(btn => {
      btn.addEventListener('click', function() {
        const action = this.querySelector('i').dataset.lucide;
        alert(`${action.charAt(0).toUpperCase() + action.slice(1)} feature coming soon!`);
      });
    });
  
    // Messages search functionality
    const messagesSearchInput = document.getElementById('messages-search-input');
    if (messagesSearchInput) {
      messagesSearchInput.addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase();
        const conversations = document.querySelectorAll('.conversation-item');
        
        conversations.forEach(conversation => {
          const name = conversation.querySelector('h3').textContent.toLowerCase();
          const preview = conversation.querySelector('.conversation-preview').textContent.toLowerCase();
          
          if (name.includes(searchTerm) || preview.includes(searchTerm)) {
            conversation.style.display = 'flex';
          } else {
            conversation.style.display = 'none';
          }
        });
      });
    }
  });