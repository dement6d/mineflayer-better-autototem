import { Bot } from 'mineflayer'
import pvp from 'mineflayer-pvp'
import { pathfinder } from 'mineflayer-pathfinder'
import { Entity } from 'prismarine-entity'

declare module 'mineflayer-autototem' {
    
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