module.exports = (sequelize, DataTypes) => {

  const role_permission = sequelize.define('role_permission', {
    role_permission_id : { type : DataTypes.UUID,primaryKey: true },
    enable_flag        : {  type: DataTypes.BOOLEAN },
    createdAt          : { type : DataTypes.DATE,field :"date_created" },
    updatedAt          : { type : DataTypes.DATE,field :"date_modified" },
    created_by         : { type : DataTypes.UUID },
    updated_by         : { type : DataTypes.UUID }
  },{
    freezeTableName: true,
  });

  role_permission.associate = function (models) {
      
      role_permission.hasOne(models.role, {
        foreignKey: 'role_id'
      });

      role_permission.hasMany(models.permission, {
        foreignKey: 'permission_id'
      });
    }

  return role_permission;
};