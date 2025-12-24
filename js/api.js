// js/api.js
import { CONFIG } from '../config.js';
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm';

export const supabase = createClient(CONFIG.SUPABASE_URL, CONFIG.SUPABASE_ANON_KEY);

// Buscar todos os comentários e os nomes de utilizador associados
export async function fetchComments() {
    const { data, error } = await supabase
        .from('comments')
        .select(`
            id,
            content,
            created_at,
            profiles (username)
        `)
        .order('created_at', { ascending: false });

    if (error) {
        console.error('Erro ao buscar comentários:', error.message);
        return [];
    }
    return data;
}

// Inserir um novo comentário
export async function insertComment(content, userId) {
    const { data, error } = await supabase
        .from('comments')
        .insert([{ 
            content: content, 
            user_id: userId 
        }]);

    if (error) {
        console.error('Erro ao postar comentário:', error.message);
        throw error;
    }
    return data;
}