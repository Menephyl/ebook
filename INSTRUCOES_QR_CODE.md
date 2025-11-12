# 📋 Instruções para Adicionar o QR Code PIX Real

## ✅ O que já foi configurado:

1. **Código PIX**: `bd087eb9-ca8d-452c-ba4f-Od49282bbe5e` ✅
2. **Informações da Empresa**: 52 777 435 SERGIO DIAS FILHO ✅
3. **Instituição**: NU PAGAMENTOS - IP ✅
4. **Modal de Pagamento**: Configurado com espaço para QR Code ✅

## 📸 Como adicionar a imagem do QR Code:

### Opção 1: Usar uma URL de hospedagem (Recomendado)

1. Faça upload da imagem do QR Code em um serviço de hospedagem:
   - [Cloudinary](https://cloudinary.com) (gratuito)
   - [Imgur](https://imgur.com) (gratuito)
   - [ImgBB](https://imgbb.com) (gratuito)
   - Seu próprio servidor/CDN

2. Abra o arquivo `src/App.jsx`

3. Encontre a linha 39:
```javascript
const qrCodeImage = "https://via.placeholder.com/300x300/FFFFFF/000000?text=QR+CODE+PIX"
```

4. Substitua pela URL da sua imagem:
```javascript
const qrCodeImage = "https://sua-url-aqui.com/qrcode-pix.png"
```

### Opção 2: Adicionar a imagem localmente

1. Coloque a imagem do QR Code na pasta `src/assets/` com o nome `qrcode-pix.png`

2. No arquivo `src/App.jsx`, importe a imagem no topo:
```javascript
import qrCodeImage from './assets/qrcode-pix.png'
```

3. Remova ou comente a linha 39:
```javascript
// const qrCodeImage = "https://via.placeholder.com/300x300/FFFFFF/000000?text=QR+CODE+PIX"
```

## 🎨 O QR Code já está integrado no modal!

O QR Code será exibido automaticamente no modal de pagamento quando o usuário selecionar a opção PIX, junto com:
- Código PIX para copiar
- QR Code para escanear
- Informações da empresa
- Link para pagamento via PIX

## 📝 Nota Importante:

A imagem do QR Code deve ter:
- **Tamanho recomendado**: 300x300px ou maior (será redimensionada automaticamente)
- **Formato**: PNG ou JPG
- **Qualidade**: Alta resolução para facilitar a leitura

---

**Pronto!** Após adicionar a URL ou imagem do QR Code, o modal estará 100% funcional! 🚀

