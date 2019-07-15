#!/usr/bin/env python3
from mxdGeesi import app


if __name__ == '__main__':
    app.secret_key = '1235674ABCDEF'
    app.run(debug = True)
