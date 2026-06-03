
import './style.css';

interface EmojiConfig {
    emojis: string[]
    time: number
    size:number
}

export default class EmojiPicker {
    private emojis: string[];
    private time: number;
    private size: number;

    constructor(config: EmojiConfig) {
        this.emojis = config.emojis;
        this.time = config.time;
        this.size = config.size;
    }

    private randomEmoji() {
        const index = Math.floor(Math.random() * this.emojis.length);
        return this.emojis[index];
    }

    public createEmojiElement() {
        let arr: HTMLElement[] = [];
        document.body.addEventListener('click', (e) => {
            const div = document.createElement('div');
            div.className = 'emoji';
            div.style.width = `${this.size}px`;
            div.style.height = `${this.size}px`;
            div.style.fontSize = `${this.size * 0.8}px`;
            div.textContent = this.randomEmoji();
            div.style.left = `${e.clientX - this.size / 2}px`;
            div.style.top = `${e.clientY - this.size / 2}px`;


            document.body.appendChild(div);
            arr.push(div);
            setTimeout(() => {
                const d = arr.shift();
                if (d) {
                    document.body.removeChild(d);
                }
            }, this.time)
        })
    }
}




