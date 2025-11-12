# Instruções para Configurar Pagamento

## 📋 Dados que Precisam Ser Atualizados

### 1. Código PIX
No arquivo `src/App.jsx`, linha 25, substitua o código PIX de exemplo:

```javascript
const pixCode = "SEU_CODIGO_PIX_REAL_AQUI"
```

### 2. QR Code PIX
No arquivo `src/App.jsx`, linha 28, substitua a URL do QR Code:

**Opção 1: Se você tem uma imagem do QR Code**
- Faça upload da imagem em um serviço de hospedagem (Cloudinary, Imgur, etc.)
- Cole a URL da imagem:

```javascript
const qrCodeImage = "https://seuservico.com/qrcode-pix.png"
```

**Opção 2: Se você tem o QR Code em base64**
- Converta para base64 e use:

```javascript
const qrCodeImage = "data:image/png;base64,SEU_QR_CODE_BASE64_AQUI"
```

### 3. Link PIX (Opcional)
Se você tiver um link direto para pagamento PIX, atualize na linha 26:

```javascript
const pixLink = "https://seu-link-pix.com/pagamento"
```

### 4. Link Mercado Pago
O link do Mercado Pago já está configurado:
```javascript
const mercadoPagoLink = "https://mpago.la/2XrXfQB"
```

Se precisar alterar, edite a linha 27 do arquivo `src/App.jsx`.

### 5. Email de Contato
Atualize o email na linha 29:

```javascript
const emailSergio = "seu-email-real@exemplo.com"
```

## 🔧 Como Obter o QR Code PIX

1. Acesse sua conta bancária ou gerador de PIX
2. Gere o QR Code para recebimento
3. Faça download da imagem do QR Code
4. Faça upload em um serviço de hospedagem de imagens
5. Cole a URL no código

## 📱 Serviços Recomendados para Hospedar QR Code

- **Cloudinary**: https://cloudinary.com (gratuito)
- **Imgur**: https://imgur.com (gratuito)
- **ImageBB**: https://imgbb.com (gratuito)
- **GitHub**: Você pode criar um repositório e hospedar a imagem

## ✅ Verificação

Após atualizar os dados:

1. Execute o projeto: `npm run dev`
2. Clique no botão "Quero Meu Exemplar Agora"
3. Selecione a opção PIX
4. Verifique se o código PIX e QR Code estão corretos
5. Teste a cópia do código PIX
6. Teste o link do Mercado Pago

## 🆘 Problemas Comuns

### QR Code não aparece
- Verifique se a URL da imagem está correta
- Verifique se a imagem está acessível publicamente
- Tente usar uma imagem em formato PNG ou JPG

### Código PIX não copia
- Verifique se o navegador permite acesso à área de transferência
- Teste em diferentes navegadores (Chrome, Firefox, Safari)

### Link do Mercado Pago não funciona
- Verifique se o link está correto
- Teste o link diretamente no navegador
- Certifique-se de que a conta do Mercado Pago está ativa


