import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

export default function ClusteringGuide() {
  return (
    <>
      <Navbar />
      <main className="max-w-4xl mx-auto px-4 py-8 space-y-8">
        <section>
          <h1 className="text-3xl font-bold mb-4">Clustering in Machine Learning</h1>
          <p className="text-lg mb-4">
            Clustering is an unsupervised learning method that groups similar data points based on their features.
            Clustering algorithms aim to find natural groupings within a dataset without any prior knowledge of the class labels.
            It is widely used in applications like customer segmentation, anomaly detection, and image compression. 
            The three most common clustering algorithms are K-means, hierarchical clustering, and DBSCAN.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <a href="#k-means" className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                Learn about K-Means
            </a>
            <a href="#hierarchical" className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                Learn about Hierarchical
            </a>
            <a href="#dbscan" className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                Learn about DBSCAN
            </a>
           </div>
        </section>

        <section id="k-means">
          <h2 className="text-2xl font-semibold mb-2">1. Partitional Clustering (K-Means)</h2>
          <p className="text-base">
            Partitional clustering divides a dataset into a predefined number of non-overlapping clusters. 
            Partitional clustering algorithms, such as K-means, require a specified number of clusters (or k) beforehand. 
            The algorithm then iteratively assigns data points to their nearest cluster center (or <em>centroid</em>) by minimizing a pre-specified distance metric until convergence. 
            Examples of possible distance metrics used in partitional clustering include Euclidean distance, Manhattan distance, and cosine similarity.
          </p>
          <h3 className="text-xl font-bold mt-4">How It Works</h3>
          <ol className="list-decimal list-inside space-y-2">
            <li>Initialize <em>k</em> centroids randomly.</li>
            <li>Assign each data point to the nearest centroid.</li>
            <li>Recalculate centroids as the mean of all points in a cluster.</li>
            <li>Repeat until centroids stabilize or a maximum number of iterations is reached.</li>
          </ol>
          <h3 className="text-xl font-bold mt-4">Mathematical Formulation</h3>
          <p className="text-base">
            The objective is to minimize the within-cluster sum of squares (WCSS):
          </p>
          <pre className="bg-gray-800 text-white p-4 rounded text-sm">
            WCSS = Σ Σ ||xᵢ - μⱼ||²
          </pre>
          <p className="text-sm text-gray-600">
            where <em>xᵢ</em> is a data point, <em>μⱼ</em> is the centroid of cluster <em>j</em>, and || || denotes the Euclidean distance.
          </p>
          <h3 className="text-xl font-bold mt-4">Sample Python Code</h3>
            <SyntaxHighlighter language="python" style={vscDarkPlus} className="rounded-lg">
            {`from sklearn.cluster import KMeans
import numpy as np

# Sample data
X = np.array([[1, 2], [1, 4], [1, 0],
            [10, 2], [10, 4], [10, 0]])

# Initialize KMeans with 2 clusters
kmeans = KMeans(n_clusters=2, random_state=0)

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
          Alternatively, hierarchical clustering creates a hierarchy of clusters. 
          Hierarchical clustering is more flexible than partitional clustering because it doesn't require a specified number of 
          clusters beforehand. It is, however, computationally expensive and not well suited for large datasets. While, partitional 
          clustering algorithms assign outliers to the nearest cluster center, which may not represent their true identity, 
          hierarchical clustering algorithms allow outliers to form single clusters, making the algorithm more robust to outliers.
            Hierarchical clustering builds a tree-like structure (dendrogram) to represent nested clusters. It can be agglomerative (bottom-up) or divisive (top-down).
          </p>
          <h3 className="text-xl font-bold mt-4">How It Works</h3>
          <ol className="list-decimal list-inside space-y-2">
            <li>Start with each data point as its own cluster.</li>
            <li>Merge the two closest clusters based on a distance metric (e.g., Euclidean, Manhattan).</li>
            <li>Repeat until all points belong to a single cluster.</li>
          </ol>
          <h3 className="text-xl font-bold mt-4">Mathematical Formulation</h3>
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
          <h3 className="text-xl font-bold mt-4">How It Works</h3>
          <ol className="list-decimal list-inside space-y-2">
            <li>Define two parameters: <em>ε</em> (radius) and <em>minPts</em> (minimum points).</li>
            <li>Classify points as core, border, or noise based on density.</li>
            <li>Expand clusters from core points, including border points within <em>ε</em>.</li>
          </ol>
          <h3 className="text-xl font-bold mt-4">Mathematical Formulation</h3>
          <p className="text-base">
            A point is a core point if it has at least <em>minPts</em> neighbors within a radius <em>ε</em>. The algorithm iteratively expands clusters from core points.
          </p>
        </section>
      </main>
      <Footer />
    </>
  )
}