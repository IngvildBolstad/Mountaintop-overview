module.exports = (sequelize, Sequelize) => {
    const Countries = sequelize.define(
        'Countries',
        {
            name: {
                type: Sequelize.DataTypes.STRING,
                allowNull: false
            }
        },
        {
            timestamps: false,
        }
    )

    return Countries
}