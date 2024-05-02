const chatItems = document.querySelectorAll('.chat');
const messageContainer = document.querySelector('.message-container');
const chatHeader = document.querySelector('.chat-header');
const contactAvatar = document.querySelector('.chat-header .avatar');
const contactName = document.querySelector('.chat-header h3');
const contactStatus = document.querySelector('.chat-header .status');
chatItems.forEach(chat => {
    chat.addEventListener('click', () => {
        messageContainer.innerHTML = '';
        const chatId = chat.getAttribute('data-chat-id');
        const contactData = getContactData(chatId);
        updateContactInfo(contactData);
        const messageHistory = getMessageHistory(chatId);
        displayMessageHistory(messageHistory);});});
const chatData=[
    { id: 1, name: 'User1', avatar: 'user1.jpg', status: 'Online' },
    { id: 2, name: 'User2', avatar: 'user2.jpg', status: 'Offline' },
    { id: 3, name: 'User3', avatar: 'user3.jpeg', status: 'Online' },
    { id: 4, name: 'User4', avatar: 'user4.jpg', status: 'Online' },
    { id: 5, name: 'User5', avatar: 'user5.jpg', status: 'Offline' }];
function getContactData(chatId){
    const chat = chatData.find(chat => chat.id === parseInt(chatId));
    if (chat){
        return{
            avatar: chat.avatar,
            name: chat.name,
            status: chat.status};}
    else{
        return{
            avatar: '',
            name: '',
            status: ''};}}
function updateContactInfo(contactData){
    contactAvatar.style.backgroundImage = `url(${contactData.avatar})`;
    contactName.textContent = contactData.name;
    contactStatus.textContent = contactData.status;}
function getMessageHistory(chatId) {
    return [
        { sender: 'John Doe', content: 'Hello, how are you?' },
        { sender: 'You', content: 'I am fine, thank you!' },];}
function displayMessageHistory(messageHistory){
    messageHistory.forEach(message => {
        const messageElement = document.createElement('div');
        messageElement.classList.add('message');
        messageElement.textContent = `${message.sender}: ${message.content}`;
        messageContainer.appendChild(messageElement);});}
