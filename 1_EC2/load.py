#!/usr/bin/env python
"""
Produces load on all available CPU cores.
To quit press CTRL+Z.
"""

from multiprocessing import Pool
from multiprocessing import cpu_count

def f(x):
    while True:
        x*x

if __name__ == '__main__':
    processes = cpu_count()
    print 'utilizing %d cores\n' % processes
    print 'To quit press CTRL + Z'
    pool = Pool(processes)
    pool.map(f, range(processes))
