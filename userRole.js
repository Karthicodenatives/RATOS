module.exports = (sequelize, DataTypes) => {

  const userRole = sequelize.define('userRole', {
    user_role_id    : { type : DataTypes.UUID,primaryKey: true },
    enable_flag     : { type: DataTypes.BOOLEAN },
    createdAt       : { type : DataTypes.DATE,field :"date_created" },
    updatedAt       : { type : DataTypes.DATE,field :"date_modified" },
    created_by      : { type : DataTypes.UUID },
    updated_by      : { type : DataTypes.UUID }
  },{
    freezeTableName: true,
  });

  userRole.associate = function (models) {
      
      userRole.hasOne(models.accountuser, {
        foreignKey: 'account_user_id'
      });

      userRole.hasMany(models.role, {
        foreignKey: 'role_id'
      });
    }

  return userRole;
};