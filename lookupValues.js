module.exports = (sequelize, DataTypes) => {
    const lookupvalue = sequelize.define('lookupvalue', {
        lookup_value_id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false },
        lookup_id     : { type: DataTypes.INTEGER },
        parent_id     : { type: DataTypes.INTEGER },
        seq           : { type: DataTypes.INTEGER,allowNull: false },
        enable_flag   : { type: DataTypes.BOOLEAN },
        created_by    : { type: DataTypes.UUID },
        updated_by    : { type: DataTypes.UUID }
    },
    {
        freezeTableName: true,
    });

    return lookupvalue;
};

