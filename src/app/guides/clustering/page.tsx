"use client";

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { useState } from 'react'; // temp
import { FaBars } from 'react-icons/fa'; // temp

export default function ClusteringGuide() {
  // temp block top
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  // temp block bottom
  return (
    <>
      <Navbar />
      <div className="flex min-h-screen">
        {/* Hamburger Menu (Visible on Mobile) */}
        <button
          onClick={toggleSidebar}
          className="lg:hidden fixed bottom-4 left-4 z-50 bg-gray-600 text-white p-2 rounded shadow focus:outline-none"
        >
          <FaBars size={20} />
        </button>
        <aside
          className={`fixed lg:sticky top-0 h-screen w-64 bg-gray-100 p-4 z-40 transform ${
            isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
          } transition-transform duration-300 lg:translate-x-0`}
        >
        {/* <aside className="w-64 bg-gray-100 p-4 sticky top-0 h-screen"> */}
        <h2 className="text-lg font-bold mb-4 text-black">Clustering</h2>
          <ul className="space-y-2">
            <li>
              <a href="#k-means" className="text-gray-600 hover:underline">
                K-Means Clustering
              </a>
              <ul className="pl-4 space-y-1">
                <li>
                  <a href="#partional-how-it-works" className="text-gray-500 hover:underline">
                    How It Works
                  </a>
                </li>
                <li>
                  <a href="#k-means-math" className="text-gray-500 hover:underline">
                    Mathematical Formulation
                  </a>
                </li>
                <li>
                  <a href="#k-means-hyperparameter" className="text-gray-500 hover:underline">
                    Hyperparameter Tuning
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#hierarchical" className="text-gray-600 hover:underline">
                Hierarchical Clustering
              </a>
              <ul className="pl-4 space-y-1">
                <li>
                  <a href="#hierarchical-how-it-works" className="text-gray-500 hover:underline">
                    How It Works
                  </a>
                </li>
                <li>
                  <a href="#hierarchical-math" className="text-gray-500 hover:underline">
                    Mathematical Formulation
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#dbscan" className="text-gray-600 hover:underline">
                DBSCAN
              </a>
              <ul className="pl-4 space-y-1">
                <li>
                  <a href="#dbscan-how-it-works" className="text-gray-500 hover:underline">
                    How It Works
                  </a>
                </li>
                <li>
                  <a href="#dbscan-math" className="text-gray-500 hover:underline">
                    Mathematical Formulation
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </aside>
      <main className="min-w-0 max-w-4xl mx-auto px-4 py-8 space-y-8">
        <section>
          <h1 className="text-3xl font-bold mb-4">Clustering in Machine Learning</h1>
          <p className="text-lg mb-4">
            Clustering is an{' '}
            <span className="relative group cursor-help inline-block">
              <em><u>unsupervised</u></em>
              <span className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 w-64 text-xs text-white bg-black px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-50 select-none pointer-events-none">
              A type of machine learning where the algorithm finds patterns or groupings in data without using labeled examples.
              </span>
            </span>{' '}machine learning method that groups similar data points based on their features (i.e., the data).
            Clustering algorithms aim to find natural groupings within a dataset without any prior knowledge of the class labels.
            It is widely used in applications like customer segmentation, anomaly detection, and image compression. The three most common clustering algorithms are 
            K-Means, Hierarchical, and DBSCAN.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <a href="#k-means" className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                Learn about K-Means Clustering
            </a>
            <a href="#hierarchical" className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                Learn about Hierarchical Clustering
            </a>
            <a href="#dbscan" className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                Learn about DBSCAN
            </a>
           </div>
        </section>

        <section id="k-means">
          <h2 className="text-2xl font-semibold mb-2">1. K-Means</h2>
          <p className="text-base">
            Partitional clustering algorithms, like K-Means, divide a dataset into a predefined number (or <em>k</em>) of non-overlapping clusters.
            The K-Means algorithm iteratively assigns data points to their nearest cluster 
            center (or <em>centroid</em>) by minimizing a specified distance metric until convergence&#59; usually Euclidian distance.
            K-Medians is an similar partitional clustering algorithm that utilizes Manhattan distance. 
          </p>
          <div className="flex justify-center my-8">
            <img
              src="/clustering_plot.png"
              alt="Clustering Plot"
              className="rounded-lg shadow-lg w-full max-w-md h-auto"
            />
          </div>
          <h3 id="k-means-how-it-works" className="text-xl font-bold mt-4">How It Works</h3>
          <ol className="list-decimal list-inside space-y-2">
            <li>Randomly initialize <em>k</em> centroids.</li>
            <li>Assign each data point to the nearest centroid based on distance metric (usually Euclidian).</li>
            <li>Recalculate centroids as the mean of all points in a cluster.</li>
            <li>Repeat steps 2-3 until centroids stabilize or a maximum number of iterations is reached.</li>
          </ol>
          <h3 id="k-means-math" className="text-xl font-bold mt-4">Mathematical Formulation</h3>
          <p className="text-base">
            The objective is to minimize the within-cluster sum of squares (WCSS):
          </p>
          <pre className="bg-gray-800 text-white p-4 rounded text-sm">
            WCSS = Σ Σ ||xᵢ - μⱼ||²
          </pre>
          <p className="text-sm text-gray-600">
            where <em>xᵢ</em> is a data point, <em>μⱼ</em> is the centroid of cluster <em>j</em>, and || || denotes the Euclidean distance.
          </p>
          
            <h3 id="k-means-hyperparameter" className="text-xl font-bold mt-4">Hyperparameter tuning</h3>
            <p className="text-base">
            As previously mentioned, K-Means clustering requires the number of clusters (<em>k</em>) to be specified prior to running the algorithm.
            While <em>k</em> is often informed by some prior theory regarding the underlying data, it can also be treated as a hyperparameter that
            needs to be tuned. A simple method to determine an "optimal" k is to run the algorithm multiple times with varying k. The WCSS monotonically decreases
            as k increases, meaning that selecting k with the smallest WCSS is an insufficient solution. Researchers often plot the WCSS, also called <em>intertia</em>,
            for each potential k and select the k where the marginal decrease in inertia reaches an inflection point. This is called the "elbow method". The following plot 
            demonstrates the elbow method for the Iris dataset. 
            </p>
            <div className="flex justify-center my-8">
            <img
              src="/elbow_method.png"
              alt="Elbow Method"
              className="rounded-lg shadow-lg w-full max-w-md h-auto"
            />

          </div>
          <h3 className="text-xl font-bold mt-4">Sample Python Code</h3>
            <SyntaxHighlighter language="python" style={vscDarkPlus} className="rounded-lg">
            {`from sklearn.cluster import KMeans
from sklearn.datasets import load_iris

# Iris dataset
X = load_iris().data

# Initialize KMeans with 3 clusters 
kmeans = KMeans(n_clusters=3)

# Fit the model
kmeans.fit(X)

# Get cluster centers and labels
print("Cluster Centers:", kmeans.cluster_centers_)
print("Labels:", kmeans.labels_)`}
            </SyntaxHighlighter>
        </section>

        <section id="hierarchical">
          <h2 className="text-2xl font-semibold mb-2">2. Hierarchical Clustering</h2>
          <p className="text-base">
          Hierarchical clustering, as the name suggests, creates a hierarchy of clusters.
          Hierarchical clustering is more flexible than partitional clustering because it doesn&apos;t require a specified number of 
          clusters beforehand. It is, however, computationally expensive and not well suited for large datasets. While, partitional 
          clustering algorithms assign outliers to the nearest cluster center, which may not represent their true identity, 
          hierarchical clustering algorithms allow outliers to form single clusters, making the algorithm more robust to outliers.
          Hierarchical clustering builds a tree-like structure (dendrogram) to represent nested clusters. It can be agglomerative (bottom-up) or divisive (top-down).
          </p>
          <h3 id="hierarchical-how-it-works"className="text-xl font-bold mt-4">How It Works</h3>
          <ol className="list-decimal list-inside space-y-2">
            <li>Start with each data point as its own cluster.</li>
            <li>Merge the two closest clusters based on a distance metric (e.g., Euclidean, Manhattan).</li>
            <li>Repeat until all points belong to a single cluster.</li>
          </ol>
          <h3 id="hierarchical-math" className="text-xl font-bold mt-4">Mathematical Formulation</h3>
          <p className="text-base">
            The distance between clusters can be calculated using methods like:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>Single Linkage:</strong> Minimum distance between points in two clusters.</li>
            <li><strong>Complete Linkage:</strong> Maximum distance between points in two clusters.</li>
            <li><strong>Average Linkage:</strong> Average distance between all points in two clusters.</li>
          </ul>
        </section>

        <section id="dbscan">
          <h2 className="text-2xl font-semibold mb-2">3. DBSCAN (Density-Based Spatial Clustering)</h2>
          <p className="text-base">
            DBSCAN groups points based on density, identifying clusters of high density and marking outliers as noise. It does not require specifying the number of clusters in advance.
          </p>
          <h3 id="dbscan-how-it-works" className="text-xl font-bold mt-4">How It Works</h3>
          <ol className="list-decimal list-inside space-y-2">
            <li>Define two parameters: <em>ε</em> (radius) and <em>minPts</em> (minimum points).</li>
            <li>Classify points as core, border, or noise based on density.</li>
            <li>Expand clusters from core points, including border points within <em>ε</em>.</li>
          </ol>
          <h3 id="dbscan-math" className="text-xl font-bold mt-4">Mathematical Formulation</h3>
          <p className="text-base">
            A point is a core point if it has at least <em>minPts</em> neighbors within a radius <em>ε</em>. The algorithm iteratively expands clusters from core points.
          </p>
        </section>
      </main>
      </div>
      <Footer />
    </>
  )
}