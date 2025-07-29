/**
 * Funções básicas de I/O e manipulação de strings inspiradas no Python.
 */
//% color="#3178C6" icon="\uf121" block="Python"
namespace py {

    /**
     * Exibe uma mensagem na tela por um curto período.
     * Equivalente a print() em muitos contextos de aprendizado.
     * @param text O texto principal a ser exibido.
     * @param text2 (Opcional) Um segundo texto ou valor a ser exibido abaixo do primeiro.
     */
    //% block="print %text || with %text2"
    //% group="I/O" weight=110
    //% inlineInputMode=inline
    export function print(text: any, text2?: any): void {
        game.splash(text, text2);
    }

    /**
     * Exibe uma mensagem na parte de baixo da tela por um curto período.
     * Equivalente a print() em muitos contextos de aprendizado.
     * @param text O texto principal a ser exibido.
     */
    //% block="sprint %text"
    //% group="I/O" weight=100
    //% inlineInputMode=inline
    export function sprint(text: any): void {
        game.showLongText(text, DialogLayout.Bottom)
    }

    /**
     * Pede ao usuário para digitar um texto e retorna o que foi digitado.
     * Equivalente a input().
     * @param prompt O texto a ser exibido para o usuário, eg: "Qual é o seu nome?"
     */
    //% block="input %prompt"
    //% group="I/O" weight=90
    export function input(prompt: string): string {
        return game.askForString(prompt);
    }

    /**
     * Retorna uma cópia da string com todos os caracteres em minúsculas.
     * @param text A string para converter, eg: "OLÁ"
     */
    //% block="lower %text"
    //% group="String" weight=80
    export function lower(text: string): string {
        return text.toLowerCase();
    }

    /**
     * Retorna uma cópia da string com todos os caracteres em maiúsculas.
     * @param text A string para converter, eg: "olá"
     */
    //% block="upper %text"
    //% group="String" weight=70
    export function upper(text: string): string {
        return text.toUpperCase();
    }

    /**
     * Retorna uma cópia da string com a primeira ocorrência de 'old' substituída por 'new'.
     * @param text A string original, eg: "Olá, mundo!"
     * @param old O texto a ser substituído, eg: "mundo"
     * @param new O novo texto, eg: "MakeCode"
     */
    //% block="replace in %text find %old with %new"
    //% group="String" weight=60
    export function replace(text: string, old: string, new_: string): string {
        // Usamos new_ para evitar conflito com a palavra-chave 'new'
        return text.replace(old, new_);
    }

    /**
     * Divide uma string em uma lista de strings, usando um separador.
     * Se nenhum separador for fornecido, divide pelos espaços.
     * @param text A string a ser dividida, eg: "maçã,banana,laranja"
     * @param separator O delimitador para dividir a string, eg: ","
     */
    //% block="split %text || by %separator"
    //% separator.defl=" "
    //% group="String" weight=50
    //% inlineInputMode=inline
    export function split(text: string, separator: string = " "): string[] {
        // O método split do JavaScript é muito semelhante ao do Python.
        return text.split(separator);
    }
}

/**
 * Funções relacionadas a tempo, inspiradas no módulo 'time' do Python.
 */
//% color="#6A5ACD" icon="\uf017" block="Time"
namespace time {
    /**
     * Pausa a execução do programa por um número de segundos.
     * Equivalente a time.sleep().
     * @param seconds A duração da pausa em segundos, eg: 1.5
     */
    //% block="sleep %seconds seconds"
    //% weight=100
    export function sleep(seconds: number): void {
        pause(seconds * 1000);
    }

    /**
     * Retorna o tempo em segundos desde o início do jogo.
     * Útil para medir intervalos de tempo. Equivalente a time.time() em muitos casos de uso em jogos.
     */
    //% block="time"
    //% weight=90
    export function time(): number {
        return game.runtime() / 1000;
    }
}

/**
 * Funções para geração de números aleatórios, inspiradas no módulo 'random' do Python.
 */
//% color="#B22222" icon="\uf1d8" block="Random"
namespace random {
    /**
     * Retorna um inteiro aleatório no intervalo [a, b], incluindo ambos os pontos finais.
     * @param a O limite inferior, eg: 1
     * @param b O limite superior, eg: 100
     */
    //% block="randint from %a to %b"
    //% weight=100
    export function randint(a: number, b: number): number {
        const lista = [];
        for (let i = a; i <= b; i++) {
            lista.push(i);
        }
        return Math.pickRandom(lista);
    }

    /**
     * Retorna um elemento aleatório de uma lista.
     * @param list A lista da qual escolher um elemento.
     */
    //% block="choice from %list=variables_get(my_list)"
    //% weight=90
    export function choice(list: any[]): any {
        if (!list || list.length === 0) {
            return undefined;
        }
        return list[randint(0, list.length - 1)];
    }

    /**
     * Retorna um inteiro aleatório de range(start, stop, step).
     * Não inclui o 'stop'.
     */
    //% block="randrange start %start stop %stop step %step"
    //% start.defl=0
    //% step.defl=1
    //% weight=80
    export function randrange(start: number, stop: number, step: number = 1): number {
        const width = stop - start;
        if (step === 0 || (step > 0 && width <= 0) || (step < 0 && width >= 0)) {
            // Retorna NaN ou lança um erro para casos inválidos, como no Python
            return NaN;
        }
        const n = Math.ceil(width / step);
        const i = randint(0, n - 1);
        return start + i * step;
    }
}

/**
 * Constantes e utilitários de string, inspirados no módulo 'string' do Python.
 */
//% color="#FF8C00" icon="\uf031" block="String"
namespace string {
    /**
     * Uma string contendo todos os caracteres de pontuação ASCII.
     */
    //% block="punctuation"
    //% group="Constants" weight=100
    export function punctuation() {
        return `!"#$%&'()*+,-./:;<=>?@[\\]^_\`{|}~`;
    }

    /**
     * Uma string contendo todos os dígitos '0123456789'.
     */
    //% block="digits"
    //% group="Constants" weight=90
    export function digits() {
        return "0123456789";
    }

    /**
     * Uma string contendo todas as letras ASCII minúsculas.
     */
    //% block="ascii_lowercase"
    //% group="Constants" weight=80
    export function ascii_lowercase() {
        return "abcdefghijklmnopqrstuvwxyz";
    }

    /**
     * Uma string contendo todas as letras ASCII maiúsculas.
     */
    //% block="ascii_uppercase"
    //% group="Constants" weight=70
    export function ascii_uppercase() {
        return "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }

    /**
     * Uma string contendo todas as letras ASCII (maiúsculas e minúsculas).
     */
    //% block="ascii_letters"
    //% group="Constants" weight=60
    export function ascii_letters() {
        return ascii_lowercase() + ascii_uppercase();
    }
}