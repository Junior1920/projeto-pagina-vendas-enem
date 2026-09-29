// Troque apenas esta variável para apontar todos os botões de compra
// para o seu link de checkout real.
export const CHECKOUT_URL = "https://pay.kiwify.com.br/KJKtroX";

// Datas oficiais do ENEM 2026, ancoradas em UTC para não depender do
// fuso horário configurado no navegador do usuário.
// 08/11/2026 e 15/11/2026, às 13:30 no horário de Brasília (UTC-3)
// = 16:30 em UTC.
export const ENEM_DAY_1_UTC = Date.UTC(2026, 10, 8, 16, 30, 0);
export const ENEM_DAY_2_UTC = Date.UTC(2026, 10, 15, 16, 30, 0);
