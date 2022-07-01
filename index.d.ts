import { Bot } from 'mineflayer'

declare module 'mineflayer-autototem-plus' {
    
    export function autoTotem(bot: Bot): void;
    
    export interface AutoTotem {
        enabled: boolean;
        whileMoving: boolean;
        stopMovement: boolean;
        stopFighting: boolean;
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