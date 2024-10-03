import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../../config/sequelize';

export class User extends Model {
    declare id: number;
    declare name: string;
    declare age: number;
    declare password: string;
    declare email: string;
}

User.init({
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    age: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
    }
}, {
    sequelize,
    modelName: 'User',
});