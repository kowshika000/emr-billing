const HtmlWebPackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const path = require("path");
const Dotenv = require("dotenv-webpack");
const deps = require("./package.json").dependencies;
const printCompilationMessage = require("./compilation.config.js");

module.exports = (_, argv) => {
  const isDevelopment = argv.mode === "development";

  return {
    output: {
      publicPath: isDevelopment ? "http://localhost:3001/" : "auto",
    },

    resolve: {
      extensions: [".tsx", ".ts", ".jsx", ".js", ".json"],
    },

    devServer: {
      port: 3001,
      historyApiFallback: true,
      watchFiles: [path.resolve(__dirname, "src")],
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
      onListening(devServer) {
        const port = devServer.server.address().port;
        printCompilationMessage("compiling", port);
        devServer.compiler.hooks.done.tap("OutputMessagePlugin", (stats) => {
          setImmediate(() => {
            if (stats.hasErrors()) {
              printCompilationMessage("failure", port);
            } else {
              printCompilationMessage("success", port);
            }
          });
        });
      },
    },

    module: {
      rules: [
        {
          test: /\.m?js/,
          type: "javascript/auto",
          resolve: {
            fullySpecified: false,
          },
        },
        {
          test: /\.(css|s[ac]ss)$/i,
          use: ["style-loader", "css-loader", "postcss-loader"],
        },
        {
          test: /\.(ts|tsx|js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
          },
        },
        {
          test: /\.(jpg|jpeg|png|gif|svg)$/i,
          use: [
            {
              loader: "file-loader",
              options: {
                name: "[path][name].[ext]",
              },
            },
          ],
        },
      ],
    },

    plugins: [
      new ModuleFederationPlugin({
        name: "emr_billing",
        filename: "remoteEntry.js",
        remotes: {
          emr_ui: isDevelopment
            ? "emr_ui@http://localhost:3000/remoteEntry.js"
            : `emr_ui@${process.env.REACT_APP_PARENT_REMOTE_URL}/remoteEntry.js`,
        },
        exposes: {
          "./BillingLanding": "./src/billingLanding/Billing.jsx",
          "./BillingPage": "./src/billingPage/BillingPage.jsx",
          // "./childRootReducer": "./src/Redux/reducer.jsx",
        },
        shared: {
          ...deps,
          react: { singleton: true, requiredVersion: deps["react"] },
          "react-dom": { singleton: true, requiredVersion: deps["react-dom"] },
          "react-router-dom": {
            singleton: true,
            requiredVersion: deps["react-router-dom"],
          },
          "react-redux": {
            singleton: true,
            requiredVersion: deps["react-redux"],
          },
          "@reduxjs/toolkit": {
            singleton: true,
            requiredVersion: deps["@reduxjs/toolkit"],
          },
          axios: { singleton: true, requiredVersion: deps["axios"] },
        },
      }),
      new HtmlWebPackPlugin({
        template: "./src/index.html",
      }),
      new Dotenv(),
    ],
  };
};
