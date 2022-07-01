import { Bot } from "mineflayer"
import pvp from "mineflayer-pvp"
import { pathfinder } from "mineflayer-pathfinder"
import { Entity } from "prismarine-entity"

declare module 'mineflayer-autototem' {

    /**
     * AutoTotem plugin
     * @param {Bot} bot 
     */
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

    interface Bot {
        autoTotem: AutoTotem
    }
}

declare module 'mineflayer-autototem' {
	interface Bot {
		autoTotem: AutoTotem
	}
}