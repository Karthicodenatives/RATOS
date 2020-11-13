module.exports = (sequelize, DataTypes) => {

  const menutl = sequelize.define('menutl', {
    menu_id         : { type : DataTypes.UUID,primaryKey: true },
    lang_code       : { type : DataTypes.STRING },
    enable_flag     : {  type: DataTypes.BOOLEAN },
    description     : { type: DataTypes.STRING },
    createdAt       : { type : DataTypes.DATE,field :"date_created" },
    updatedAt       : { type : DataTypes.DATE,field :"date_modified" },
    created_by      : { type : DataTypes.UUID },
    updated_by      : { type : DataTypes.UUID }
  },{
    freezeTableName: true,
  });

  menutl.associate = function (models) {
      
      menutl.hasOne(models.role, {
        foreignKey: 'role_id'
      });

      menutl.hasMany(models.permission, {
        foreignKey: 'permission_id'
      });
    }

  return menutl;
};