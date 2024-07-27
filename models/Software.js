const { DataTypes } = require("sequelize");
const { sequelize } = require("./index");

const Software = sequelize.define(
  "software",
  {
    id_software: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allownull: false,
    },

    sistema_operativo: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    winrar: {
      type: DataTypes.ENUM,
      values: ["licencia", "sin licencia", "no instalado"],
      allowNull: false,
    },

    adobe_acrobat: {
      type: DataTypes.ENUM,
      values: ["licencia", "sin licencia", "no instalado"],
      allowNull: false,
    },

    crystaldesk: {
      type: DataTypes.ENUM,
      values: ["licencia", "sin licencia", "no instalado"],
      allowNull: false,
    },

    eset: {
      type: DataTypes.ENUM,
      values: ["licencia", "sin licencia", "no instalado"],
      allowNull: false,
    },

    navegadores: {
      type: DataTypes.ENUM,
      values: ["licencia", "sin licencia", "no instalado"],
      allowNull: false,
    },

    cpu_z: {
      type: DataTypes.ENUM,
      values: ["licencia", "sin licencia", "no instalado"],
      allowNull: false,
    },

    microsoft_office: {
        type: DataTypes.ENUM,
        values: ["licencia", "sin licencia", "no instalado"],
        allowNull: false,
      },

      topaz: {
        type: DataTypes.ENUM,
        values: ["licencia", "sin licencia", "no instalado"],
        allowNull: false,
      },

      sparck: {
        type: DataTypes.ENUM,
        values: ["licencia", "sin licencia", "no instalado"],
        allowNull: false,
      },

      tally_dascom: {
        type: DataTypes.ENUM,
        values: ["licencia", "sin licencia", "no instalado"],
        allowNull: false,
      },

      ultra_vnc: {
        type: DataTypes.ENUM,
        values: ["licencia", "sin licencia", "no instalado"],
        allowNull: false,
      },

      autocad: {
        type: DataTypes.ENUM,
        values: ["licencia", "sin licencia", "no instalado"],
        allowNull: false,
      },

      anydesk: {
        type: DataTypes.ENUM,
        values: ["licencia", "sin licencia", "no instalado"],
        allowNull: false,
      },

      google_earth: {
        type: DataTypes.ENUM,
        values: ["licencia", "sin licencia", "no instalado"],
        allowNull: false,
      },

      drivereasy: {
        type: DataTypes.ENUM,
        values: ["licencia", "sin licencia", "no instalado"],
        allowNull: false,
      },

      nitropro: {
        type: DataTypes.ENUM,
        values: ["licencia", "sin licencia", "no instalado"],
        allowNull: false,
      },

      brother_ads: {
        type: DataTypes.ENUM,
        values: ["licencia", "sin licencia", "no instalado"],
        allowNull: false,
      },

      obs_studio: {
        type: DataTypes.ENUM,
        values: ["licencia", "sin licencia", "no instalado"],
        allowNull: false,
      },

      zoom: {
        type: DataTypes.ENUM,
        values: ["licencia", "sin licencia", "no instalado"],
        allowNull: false,
      },

      putty: {
        type: DataTypes.ENUM,
        values: ["licencia", "sin licencia", "no instalado"],
        allowNull: false,
      },

      epson: {
        type: DataTypes.ENUM,
        values: ["licencia", "sin licencia", "no instalado"],
        allowNull: false,
      },

      kyocera: {
        type: DataTypes.ENUM,
        values: ["licencia", "sin licencia", "no instalado"],
        allowNull: false,
      },

      adobe_photoshop: {
        type: DataTypes.ENUM,
        values: ["licencia", "sin licencia", "no instalado"],
        allowNull: false,
      },

      adobe_lightroom: {
        type: DataTypes.ENUM,
        values: ["licencia", "sin licencia", "no instalado"],
        allowNull: false,
      },

      batery_alarm_analytics: {
        type: DataTypes.ENUM,
        values: ["licencia", "sin licencia", "no instalado"],
        allowNull: false,
      },

  },
  {
    tableName: "software",
    timestamps: false,
  }
);
module.exports = Software;
