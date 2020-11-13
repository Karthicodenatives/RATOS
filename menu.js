module.exports = (sequelize, DataTypes) => {

  const menu = sequelize.define('menu', {
    menu_id         : { type : DataTypes.UUID,primaryKey: true },
    org_id          : { type: DataTypes.INTEGER },
    enable_flag     : {  type: DataTypes.BOOLEAN },
    seq             : { type: DataTypes.INTEGER, allowNull: false },
    createdAt       : { type : DataTypes.DATE,field :"date_created" },
    updatedAt       : { type : DataTypes.DATE,field :"date_modified" },
    created_by      : { type : DataTypes.UUID },
    updated_by      : { type : DataTypes.UUID }
  },{
    freezeTableName: true,
  });

  menu.associate = function (models) {
      
      menu.hasOne(models.role, {
        foreignKey: 'role_id'
      });

      menu.hasMany(models.permission, {
        foreignKey: 'permission_id'
      });
    }

  return menu;
};