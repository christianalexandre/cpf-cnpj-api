const puppeteer = require('puppeteer')

module.exports = {
    async buscaNome(valor){

        try {
            const browser = await puppeteer.launch({
                headless: false
            })
            const page = await browser.newPage()
            await page.setExtraHTTPHeaders({
                'Accept-Language': 'pt-br'
            });
            await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3359.181 Safari/537.36');
            await page.goto('https://www.situacao-cadastral.com/')
            await page.keyboard.type(valor)
            await page.keyboard.press('Tab')
            await page.keyboard.press('Enter')    
            await page.waitForNavigation()
            const nome = await page.$eval('.nome', el => el.innerText)
            const situacao = await page.$eval('.vrd', el => el.innerText)
            await browser.close()
            situacao2 = situacao.replace('Situação: ', '')
            await console.log(nome, situacao2)
            return [nome, situacao2]            
        } catch (erro) {
            throw new Error('Erro no puppeeter')
        }
        
    }
}