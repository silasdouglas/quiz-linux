// js/auth.js
import { supabase, fetchComments, insertComment } from './api.js';

const authEmail = document.getElementById('auth-email');
const authPass = document.getElementById('auth-password');
const authUser = document.getElementById('auth-username');
const authForms = document.getElementById('auth-forms');
const userLogged = document.getElementById('user-logged');
const commentsList = document.getElementById('comments-list');
const btnPost = document.getElementById('btn-post-comment');

let isSignUp = false;

// Alternar Login/Registo
window.toggleAuthMode = () => {
    isSignUp = !isSignUp;
    authUser.classList.toggle('hidden');
    document.getElementById('auth-title').textContent = isSignUp ? 'Criar Nova Conta' : 'Login na Comunidade';
    document.getElementById('btn-login').classList.toggle('hidden');
};

// Autenticação
document.getElementById('btn-signup').onclick = async () => {
    if (!isSignUp) { toggleAuthMode(); return; }
    const { data, error } = await supabase.auth.signUp({
        email: authEmail.value,
        password: authPass.value,
        options: { data: { username: authUser.value } }
    });
    if (error) alert(error.message);
    else alert('Sucesso! Verifique o seu email.');
};

document.getElementById('btn-login').onclick = async () => {
    const { error } = await supabase.auth.signInWithPassword({
        email: authEmail.value,
        password: authPass.value
    });
    if (error) alert(error.message);
    else checkUser();
};

// Logout
document.getElementById('btn-logout').onclick = async () => {
    await supabase.auth.signOut();
    checkUser();
};

// Gestão de Comentários
async function loadComments() {
    commentsList.innerHTML = '<p>A carregar...</p>';
    const comments = await fetchComments();
    commentsList.innerHTML = comments.map(c => `
        <div style="border-bottom: 1px solid #444; margin-bottom: 10px; padding: 10px;">
            <strong>${c.profiles?.username || 'Anónimo'}:</strong>
            <p>${c.content}</p>
            <small style="color: #666">${new Date(c.created_at).toLocaleString()}</small>
        </div>
    `).join('');
}

btnPost.onclick = async () => {
    const text = document.getElementById('comment-text').value;
    const { data: { user } } = await supabase.auth.getUser();
    
    if (text && user) {
        try {
            await insertComment(text, user.id);
            document.getElementById('comment-text').value = '';
            loadComments(); // Atualiza a lista
        } catch (e) {
            alert("Erro ao publicar. Verificaste as permissões RLS?");
        }
    }
};

// Monitor de Sessão
async function checkUser() {
    const { data: { user } } = await supabase.auth.getUser();
    if (user) {
        authForms.classList.add('hidden');
        userLogged.classList.remove('hidden');
        document.getElementById('display-username').textContent = user.user_metadata.username || user.email;
    } else {
        authForms.classList.remove('hidden');
        userLogged.classList.add('hidden');
    }
    loadComments();
}

checkUser();