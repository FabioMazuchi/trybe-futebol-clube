import { DataTypes, Model } from 'sequelize';
import db from '.';
import Teams from './teamsModel';

class Matches extends Model {
  id!: number;
  home_team!: number;
  home_team_goals!: number;
  away_team!: number;
  away_team_goals!: number;
  in_progress!: boolean;
}

Matches.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  team_name: { type: DataTypes.STRING },
}, {
  underscored: true,
  sequelize: db,
  modelName: 'teams',
  timestamps: false,
});

// hasOne = tem um
// belongsTo = pertencente a
// `Workaround` para aplicar as associations em TS:
// Associations 1:N devem ficar em uma das instâncias de modelo

Teams.belongsTo(Matches, { foreignKey: 'home_team', as: 'matchHome' });
Teams.belongsTo(Matches, { foreignKey: 'away_team', as: 'matchAway' });

Matches.hasMany(Teams, { foreignKey: 'id', as: 'team' });
// Example.hasMany(OtherModel, { foreignKey: 'campoD', as: 'campoEstrangeiroD' });

export default Matches;
