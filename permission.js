module.exports = (sequelize, DataTypes) => {

  const permission = sequelize.define('permission', {
    permission_id   : { type : DataTypes.UUID,primaryKey: true },
    permissionCode  : { type : DataTypes.INTEGER },
    permissionName  : { type : DataTypes.STRING },
    createdAt       : { type : DataTypes.DATE,field :"date_created" },
    updatedAt       : { type : DataTypes.DATE,field :"date_modified" },
    created_by      : { type : DataTypes.UUID },
    updated_by      : { type : DataTypes.UUID }
  },{
    freezeTableName: true,
  });

  permission.associate = function (models) {
      
      permission.hasOne(models.menu, {
        foreignKey: 'menu_id'
      });

      permission.hasMany(models.role_permission, {
        foreignKey: 'permission_id'
      });
    }

  return permission;
};