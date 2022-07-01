import { Bot } from 'mineflayer'

declare module 'mineflayer-better-autototem' {
    
    export function autoTotem(bot: Bot): void;
    
    export interface AutoTotem {
        enabled: boolean;
        equipping: readonly boolean;
        whileMoving: boolean;
        stopMovement: boolean;
        stopFighting: boolean;
        debug: boolean;
        equipAt: number;
        delay: number;
        toggle(): void;
        disable(): void;
        enable(): void;
        equip(): void;
    }
}

declare module 'mineflayer' {
	interface Bot {
		autoTotem: AutoTotem
	}
}